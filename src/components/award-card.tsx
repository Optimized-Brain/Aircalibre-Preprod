
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface AwardCardProps {
  logos?: { id: string, hint: string }[];
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export function AwardCard({ logos, icon, title, description }: AwardCardProps) {
  return (
    <Card className="flex flex-col text-center">
      <CardHeader>
        <div className="mx-auto flex h-20 items-center justify-center gap-4">
          {logos && logos.map(logo => {
            const placeholder = PlaceHolderImages.find(p => p.id === logo.id);
            return (
              <div key={logo.id} className="relative h-12 w-24" data-ai-hint={logo.hint}>
                {placeholder && 
                  <Image 
                    src={placeholder.imageUrl}
                    alt={logo.hint} 
                    fill
                    className="object-contain"
                  />
                }
              </div>
            );
          })}
          {icon && (
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              {icon}
            </div>
          )}
        </div>
        <CardTitle className="font-headline mt-4 text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
