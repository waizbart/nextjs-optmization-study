'use client';

import dynamic from 'next/dynamic';
import Spinner from '@/components/spinner';

const DynamicChart = dynamic(() => import('@/components/chart'), {
    ssr: false,
    loading: () => <Spinner />
});

export default function ChartPage() {
    return <DynamicChart />;
}