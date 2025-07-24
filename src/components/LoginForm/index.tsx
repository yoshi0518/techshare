'use client';

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Separator } from '@/components/Common';
import { FaGoogle } from 'react-icons/fa';

import { login } from './actions';

export const LoginForm = () => (
  <Card className="h-full w-full border-none shadow-none">
    <CardHeader>
      <CardTitle className="text-2xl font-bold">
        Tech<span className="text-blue-600">Share</span>
      </CardTitle>
      <CardDescription>TechShareはエンジニアのための技術記事共有プラットフォームです。</CardDescription>
    </CardHeader>
    <div className="px-4">
      <Separator className="mb-4" />
    </div>
    <CardContent>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => login()}
      >
        <FaGoogle className="mr-2" />
        Googleアカウントでログイン
      </Button>
    </CardContent>
  </Card>
);
