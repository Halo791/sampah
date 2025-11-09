'use server';

import { forecastMaterialDemand } from '@/ai/flows/forecast-material-demand';
import type { DemandForecast } from '@/lib/types';
import { z } from 'zod';

const formSchema = z.object({
  material: z.string().min(2, 'Material name is too short'),
  historicalSalesData: z.string().refine(
    (val) => {
      try {
        JSON.parse(val);
        return true;
      } catch (e) {
        return false;
      }
    },
    { message: 'Invalid JSON format for historical data' }
  ),
  marketTrends: z.string().refine(
    (val) => {
      try {
        JSON.parse(val);
        return true;
      } catch (e) {
        return false;
      }
    },
    { message: 'Invalid JSON format for market trends' }
  ),
});

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  data?: DemandForecast;
};

export async function getDemandForecast(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = formSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    const { errors } = validatedFields.error;
    return {
      message: 'Invalid form data',
      issues: errors.map((e) => e.message),
    };
  }

  try {
    const result = await forecastMaterialDemand(validatedFields.data);
    return {
      message: 'Forecast generated successfully.',
      data: result,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An error occurred while generating the forecast.',
    };
  }
}
