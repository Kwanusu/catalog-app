import {Card, CardContent, CardFooter, CardHeader, CardTitle} from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export const ProductCard = ({product}) => (
        <>
            <Card className='flex flex-col h-full overflow-hidden hover:border-primary/50 transition-colors'>
                <CardHeader className='bg-white p-4'>
                    <div className='aspect-square relative flex items-center justify-center'>
                        <img src="{product.image}" alt="{product.title}" className='max-h-40 object-contain' />
                    </div>
                </CardHeader>
                <CardContent className="flex-grow p-4">
                    <Badge variant="secondary" className="mb-2 capitalize">{product.category}</Badge>
                    <CardTitle className="text-sm line-clamp-2">{product.title}</CardTitle>
                    </CardContent>
                    <CardFooter className="p-4 flex justify-between items-center border-t">
                        <span className="text-lg font-bold">${product.price}</span>
                        <Button size="sm">Add to Cart</Button>
                    </CardFooter>
            </Card>
        </>
    
)