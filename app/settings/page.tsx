"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function Settings() {
  const [notifications, setNotifications] = useState(true)
  const [csvFile, setCsvFile] = useState<File | null>(null)

  const handleCsvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setCsvFile(file)
      // Here you would typically parse the CSV and send it to your backend
      console.log("CSV file selected:", file.name)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center space-x-2">
          <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
          <Label htmlFor="notifications">Enable meal reminders</Label>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Upload CSV</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Input id="csv-upload" type="file" accept=".csv" onChange={handleCsvUpload} />
            <p className="text-sm text-muted-foreground">Upload a CSV file with meal data</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

