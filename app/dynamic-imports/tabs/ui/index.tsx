'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const DynamicTabs = {
    Tab1: dynamic(() => import('./tab1')),
    Tab2: dynamic(() => import('./tab2')),
    Tab3: dynamic(() => import('./tab3'))
};

type TabKeys = keyof typeof DynamicTabs;

export default function TabsUI() {
    const [activeTab, setActiveTab] = useState<TabKeys>('Tab1');
    const TabContent = DynamicTabs[activeTab];
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <h1 className="text-2xl font-bold">Dynamic Tab Switcher</h1>
            <button className="cursor-pointer bg-red-500 text-white p-2 rounded-md" onClick={() => setActiveTab('Tab1')}>Tab 1</button>
            <button className="cursor-pointer bg-blue-500 text-white p-2 rounded-md" onClick={() => setActiveTab('Tab2')}>Tab 2</button>
            <button className="cursor-pointer bg-green-500 text-white p-2 rounded-md" onClick={() => setActiveTab('Tab3')}>Tab 3</button>
            <div>
                <TabContent />
            </div>
        </div>
    );
};