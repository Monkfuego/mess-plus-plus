"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Mon", calories: 2400 },
  { name: "Tue", calories: 2210 },
  { name: "Wed", calories: 2290 },
  { name: "Thu", calories: 2000 },
  { name: "Fri", calories: 2181 },
  { name: "Sat", calories: 2500 },
  { name: "Sun", calories: 2100 },
]

export default function Nutrition() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Nutrition Tracking</h1>
        <Button>Get AI Insights</Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Overview</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="calories" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Calories Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,345</div>
                <p className="text-xs text-muted-foreground">+20.1% from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Protein (g)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85</div>
                <p className="text-xs text-muted-foreground">Target: 90g</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Carbs (g)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">285</div>
                <p className="text-xs text-muted-foreground">Target: 300g</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Fat (g)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">65</div>
                <p className="text-xs text-muted-foreground">Target: 70g</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analysis" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI-Generated Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Based on your eating patterns this week:</p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Your protein intake is slightly below target</li>
                  <li>Calorie intake has been consistent</li>
                  <li>Consider increasing healthy fat consumption</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="recommendations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Personalized Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Recommended meals for tomorrow:</p>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <h3 className="font-semibold">Breakfast</h3>
                    <p>Oatmeal with fruits and nuts (350 calories)</p>
                  </div>
                  <div className="grid gap-2">
                    <h3 className="font-semibold">Lunch</h3>
                    <p>Grilled chicken salad with quinoa (450 calories)</p>
                  </div>
                  <div className="grid gap-2">
                    <h3 className="font-semibold">Dinner</h3>
                    <p>Fish curry with brown rice (400 calories)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

