import React, { ReactNode } from 'react'
import { Skeleton } from './ui/skeleton';
import { cn } from '@/lib/utils';

type SkeletonWrapperType = {
    children: ReactNode,
    isLoading: boolean,
    fullWidth?: boolean
}
function SkeletonWrapper({
    children,
    isLoading,
    fullWidth = true
}: SkeletonWrapperType) {
    if (!isLoading) return children;

    return (
        <Skeleton className={cn(fullWidth && "w-full")}>
            <div className='opacity-0'>{children}</div>
        </Skeleton>
    )
}

export default SkeletonWrapper