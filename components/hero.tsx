"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal } from "lucide-react"
import { useEffect, useRef } from "react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth * 2
    canvas.height = canvas.offsetHeight * 2
    ctx.scale(2, 2)

    let animationFrame: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / 2, canvas.height / 2)
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <canvas ref={canvasRef} className="w-full max-w-md h-48" />
      </div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Event-Driven Workflows, <span className="text-primary">Simplified</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Build powerful, scalable workflow automation with Python. Nexus provides event-based orchestration,
            real-time monitoring, and seamless integration for modern data pipelines.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              <Terminal className="h-4 w-4" />
              View Documentation
            </Button>
          </div>

          <div className="pt-8">
            <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 font-mono text-sm">
              <span className="text-muted-foreground">$</span>
              <span>pip install nexus-workflow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
