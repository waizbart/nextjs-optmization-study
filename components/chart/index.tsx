"use client";

import Box from '@mui/material/Box';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LineHighlightPlot, LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { AllSeriesType } from '@mui/x-charts/models';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import { ChartsAxisHighlight } from '@mui/x-charts/ChartsAxisHighlight';
import alphabetStock from './google.json';

const series = [
    {
        type: 'bar',
        yAxisId: 'volume',
        label: 'Volume',
        color: 'lightgray',
        data: alphabetStock.map((day: { volume: number }) => day.volume),
        highlightScope: { highlight: 'item' },
    },
    {
        type: 'line',
        yAxisId: 'price',
        color: 'red',
        label: 'Low',
        data: alphabetStock.map((day: { low: number }) => day.low),
        highlightScope: { highlight: 'item' },
    },
    {
        type: 'line',
        yAxisId: 'price',
        color: 'green',
        label: 'High',
        data: alphabetStock.map((day: { high: number }) => day.high),
    },
] as AllSeriesType[];

export default function Combining() {
    return (
        <Box sx={{ width: '100%', height: '100vh' }} suppressHydrationWarning>
            <ChartContainer
                series={series}
                xAxis={[
                    {
                        id: 'date',
                        data: alphabetStock.map((day: { date: string }) => new Date(day.date)),
                        scaleType: 'band',
                        valueFormatter: (value: Date) => value.toLocaleDateString(),
                        height: 48,
                    },
                ]}
                yAxis={[
                    { id: 'price', scaleType: 'linear', position: 'left', width: 50 },
                    {
                        id: 'volume',
                        scaleType: 'linear',
                        position: 'right',
                        valueFormatter: (value: number) => `${(value / 1000000).toLocaleString()}M`,
                        width: 55,
                    },
                ]}
            >
                <ChartsAxisHighlight x="line" />
                <BarPlot />
                <LinePlot />

                <LineHighlightPlot />
                <ChartsXAxis
                    label="Date"
                    axisId="date"
                    tickInterval={(_value: unknown, index: number) => {
                        return index % 30 === 0;
                    }}
                    tickLabelStyle={{
                        fontSize: 10,
                    }}
                />
                <ChartsYAxis
                    label="Alphabet Stock Price (USD)"
                    axisId="price"
                    tickLabelStyle={{ fontSize: 10 }}
                />
                <ChartsYAxis
                    label="Volume"
                    axisId="volume"
                    tickLabelStyle={{ fontSize: 10 }}
                />
                <ChartsTooltip />
            </ChartContainer>
        </Box>
    );
}