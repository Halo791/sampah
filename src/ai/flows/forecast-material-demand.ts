'use server';

/**
 * @fileOverview Forecasts the demand for recycled materials based on historical sales data and market trends.
 *
 * - forecastMaterialDemand - A function that forecasts the demand for a given recycled material.
 * - ForecastMaterialDemandInput - The input type for the forecastMaterialDemand function.
 * - ForecastMaterialDemandOutput - The return type for the forecastMaterialDemand function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ForecastMaterialDemandInputSchema = z.object({
  material: z.string().describe('The recycled material to forecast demand for (e.g., HDPE, PET, etc.).'),
  historicalSalesData: z.string().describe('Historical sales data for the material, in JSON format.'),
  marketTrends: z.string().describe('Current market trends affecting the material, in JSON format.'),
});
export type ForecastMaterialDemandInput = z.infer<typeof ForecastMaterialDemandInputSchema>;

const ForecastMaterialDemandOutputSchema = z.object({
  demandForecast: z.string().describe('A forecast of the demand for the recycled material.'),
  pricingStrategyRecommendation: z.string().describe('A recommendation for a pricing strategy based on the demand forecast.'),
  inventoryLevelRecommendation: z.string().describe('A recommendation for an inventory level based on the demand forecast.'),
});
export type ForecastMaterialDemandOutput = z.infer<typeof ForecastMaterialDemandOutputSchema>;

export async function forecastMaterialDemand(
  input: ForecastMaterialDemandInput
): Promise<ForecastMaterialDemandOutput> {
  return forecastMaterialDemandFlow(input);
}

const prompt = ai.definePrompt({
  name: 'forecastMaterialDemandPrompt',
  input: {schema: ForecastMaterialDemandInputSchema},
  output: {schema: ForecastMaterialDemandOutputSchema},
  prompt: `You are an expert in demand forecasting for recycled materials.

  Analyze the historical sales data and market trends to forecast the demand for the specified recycled material.
  Based on the demand forecast, recommend a pricing strategy and an inventory level.

  Recycled Material: {{{material}}}
  Historical Sales Data: {{{historicalSalesData}}}
  Market Trends: {{{marketTrends}}}
  `,
});

const forecastMaterialDemandFlow = ai.defineFlow(
  {
    name: 'forecastMaterialDemandFlow',
    inputSchema: ForecastMaterialDemandInputSchema,
    outputSchema: ForecastMaterialDemandOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
