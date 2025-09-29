"use client";

import { useGSAP } from "@gsap/react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { FC, memo, useMemo, useRef } from "react";
import * as THREE from "three";
import Image from "next/image";
import { ContactButton } from "@/components/common/contact-button";
import { useFadeInStagger } from "@/lib/animations";

gsap.registerPlugin(SplitText);

interface ShaderPlaneProps {
  vertexShader: string;
  fragmentShader: string;
  uniforms: { [key: string]: { value: unknown } };
}

function ShaderPlane({
  vertexShader,
  fragmentShader,
  uniforms,
}: ShaderPlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.u_time.value = state.clock.elapsedTime * 0.5;
      material.uniforms.u_resolution.value.set(size.width, size.height, 1.0);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}

interface ShaderBackgroundProps {
  vertexShader?: string;
  fragmentShader?: string;
  uniforms?: { [key: string]: { value: unknown } };
  className?: string;
}

const STATS_DATA = [
  {
    value: "5+ Years",
    description: "Experience in Blockchain\nDevelopment",
  },
  {
    value: "30 Days",
    description: "Guarantee MVP\nDelivery",
  },
  {
    value: "50+",
    description: "Blockchain Solutions\nDelivered",
  },
  {
    value: "$300M+",
    description: "In TLV for Smart\nContract Development",
  },
];

interface StatItemProps {
  value: string;
  description: string;
}

const StatItem: FC<StatItemProps> = ({ value, description }) => (
  <div className="bg-[#F6FAFF] py-5 md:p-8 text-center rounded-lg">
    <p className="text-xl md:text-[40px] font-medium text-[#2172E6] mb-2">
      {value}
    </p>
    <p className="text-xs md:text-lg leading-tight text-[#212121] whitespace-pre-line">
      {description}
    </p>
  </div>
);

const ShaderBackground: FC<ShaderBackgroundProps> = memo(
  ({
    vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
    gl_Position = vec4(position, 1.0);
    }
  `,
    fragmentShader = `
    precision highp float;

    varying vec2 vUv;
    uniform float u_time;
    uniform vec3 u_resolution;
    uniform sampler2D iChannel0;

    #define STEP 256
    #define EPS .001

    float smin( float a, float b, float k )
    {
        float h = clamp( 0.5+0.5*(b-a)/k, 0.0, 1.0 );
        return mix( b, a, h ) - k*h*(1.0-h);
    }

    const mat2 m = mat2(.8,.6,-.6,.8);

    float noise( in vec2 x )
    {
      return sin(1.5*x.x)*sin(1.5*x.y);
    }

    float fbm6( vec2 p )
    {
        float f = 0.0;
        f += 0.500000*(0.5+0.5*noise( p )); p = m*p*2.02;
        f += 0.250000*(0.5+0.5*noise( p )); p = m*p*2.03;
        f += 0.125000*(0.5+0.5*noise( p )); p = m*p*2.01;
        f += 0.062500*(0.5+0.5*noise( p )); p = m*p*2.04;
        //f += 0.031250*(0.5+0.5*noise( p )); p = m*p*2.01;
        f += 0.015625*(0.5+0.5*noise( p ));
        return f/0.96875;
    }


    mat2 getRot(float a)
    {
        float sa = sin(a), ca = cos(a);
        return mat2(ca,-sa,sa,ca);
    }


    vec3 _position;

    float sphere(vec3 center, float radius)
    {
        return distance(_position,center) - radius;
    }

    float swingPlane(float height)
    {
        vec3 pos = _position + vec3(0.,0.,u_time * 5.5);
        float def =  fbm6(pos.xz * .25) * 0.5;
        
        float way = pow(abs(pos.x) * 34. ,2.5) *.0000125;
        def *= way;
        
        float ch = height + def;
        return max(pos.y - ch,0.);
    }

    float map(vec3 pos)
    {
        _position = pos;
        
        float dist;
        dist = swingPlane(0.);
        
        float sminFactor = 5.25;
        dist = smin(dist,sphere(vec3(0.,-15.,80.),60.),sminFactor);
        return dist;
    }


    vec3 getNormal(vec3 pos)
    {
        vec3 nor = vec3(0.);
        vec3 vv = vec3(0.,1.,-1.)*.01;
        nor.x = map(pos + vv.zxx) - map(pos + vv.yxx);
        nor.y = map(pos + vv.xzx) - map(pos + vv.xyx);
        nor.z = map(pos + vv.xxz) - map(pos + vv.xxy);
        nor /= 2.;
        return normalize(nor);
    }

    void mainImage( out vec4 fragColor, in vec2 fragCoord )
    {
      vec2 uv = (fragCoord.xy-.5*u_resolution.xy)/u_resolution.y;
        
        vec3 rayOrigin = vec3(uv + vec2(0.,6.), -1. );
        
        vec3 rayDir = normalize(vec3(uv , 1.));
        
        rayDir.zy = getRot(.15) * rayDir.zy;
        
        vec3 position = rayOrigin;
        
        
        float curDist;
        int nbStep = 0;
        
        for(; nbStep < STEP;++nbStep)
        {
            curDist = map(position + (texture(iChannel0, position.xz) - .5).xyz * .005);
            
            if(curDist < EPS)
                break;
            position += rayDir * curDist * .5;
        }
        
        float f;
                
        float dist = distance(rayOrigin,position);
        f = dist /(98.);
        f = float(nbStep) / float(STEP);
        
        f *= .9;
        vec3 col = vec3(1.0 - f);
                
        fragColor = vec4(col,1.0);
    }
    void main() {
      vec4 fragColor;
      vec2 fragCoord = vUv * u_resolution.xy;
      mainImage(fragColor, fragCoord);
      gl_FragColor = fragColor;
    }
  `,
    uniforms = {},
    className = "w-full h-full",
  }: ShaderBackgroundProps) => {
    const shaderUniforms = useMemo(
      () => ({
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector3(1, 1, 1) },
        ...uniforms,
      }),
      [uniforms]
    );

    return (
      <div className={className}>
        <Canvas className={className} dpr={[1, 1.5]}>
          <ShaderPlane
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={shaderUniforms}
          />
        </Canvas>
      </div>
    );
  }
);

export default function InfiniteHero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useFadeInStagger({
    scopeRef: rootRef,
    titleRef: h1Ref,
    pRef,
    ctaRef,
  });

  useGSAP(
    () => {
      gsap.set(bgRef.current, { filter: "blur(28px)" });
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.to(bgRef.current, { filter: "blur(0px)", duration: 1.2 }, 0);
    },
    { scope: rootRef }
  );

  return (
    <div
      ref={rootRef}
      className="relative h-svh w-full overflow-hidden bg-white text-black"
    >
      <div className="absolute inset-0" ref={bgRef}>
        <ShaderBackground className="h-full w-full" />
      </div>

      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_80%_at_50%_50%,_transparent_40%,_white_100%)]" />

      <div className="relative z-10 flex h-svh w-full flex-col lg:items-center lg:justify-center lg:flex-row px-5">
        <div className="flex-1 flex items-center justify-center lg:pb-48">
          <div className="text-center">
            <h1
              ref={h1Ref}
              className="text-[32px] md:text-7xl font-medium mb-6 lg:max-w-4xl leading-tight"
            >
              <span className="flex items-center justify-center gap-4">
                Fastest
                <Image src="/bolt.svg" alt="bolt" width={43} height={62} />
                Blockchain
              </span>
              Development Partner
            </h1>
            <p
              ref={pRef}
              className="max-w-[1000px] font-extralight text-base lg:text-2xl text-black/70 mb-8"
            >
              Cyberk is the fastest blockchain development partner for startups
              - launch your MVP in 30 days so you’re always ready for the next
              big opportunity.
            </p>

            <div
              ref={ctaRef}
              className="lg:mb-20 mt-10 flex flex-row items-center justify-center"
            >
              <ContactButton className="text-base h-11 !px-6" />
            </div>
          </div>
        </div>
        <div className="pb-10 lg:absolute lg:bottom-10 lg:left-1/2 lg:z-20 w-full max-w-[1160px] lg:-translate-x-1/2 lg:px-4">
          <div className="rounded-lg bg-white p-2 shadow-[0px_10px_40px_0px_rgba(33,114,230,0.1)]">
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              {STATS_DATA.map((stat) => (
                <StatItem key={stat.value} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
