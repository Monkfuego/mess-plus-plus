"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"

export default function Reviews() {
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the review to your backend
    console.log("Submitted review:", { rating, review })
    // Reset form
    setRating(0)
    setReview("")
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Meal Reviews</h1>
      <Card>
        <CardHeader>
          <CardTitle>Submit a Review</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Button key={star} type="button" variant="outline" size="icon" onClick={() => setRating(star)}>
                  <Star className={`h-4 w-4 ${star <= rating ? "fill-primary" : ""}`} />
                </Button>
              ))}
            </div>
            <Textarea
              placeholder="Write your review here..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <Button type="submit">Submit Review</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

