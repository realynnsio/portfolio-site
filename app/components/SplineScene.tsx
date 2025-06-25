'use client'
import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: Readonly<SplineSceneProps>) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <iframe
        src={scene}
        className={className}
        title="3D Scene"
      />
      {/* <Spline scene={scene} className={className} /> */}
    </Suspense>
  )
}