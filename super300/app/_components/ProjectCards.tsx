import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

export default function ProjectCards({title,description,tags}:{
    title : string, description : string,tags : string[]
}) {
  return (
    <Card className='transition-all hover:-translate-y-1 hover:shadow-xl'>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className='text-foreground-muted mb-4'>{description}</p>

            <div className='flex flex-wrap gap-2 mb-2'>
                {tags.map(t =>{
                    return<div key={t} className='text-xs px-2 py-1 rounded-md bg-muted'>
                        {t}
                    </div>
                })}
            </div>
            <Button variant={"outline"} size="sm">View Projects</Button>
        </CardContent>
    </Card>
  )
}
