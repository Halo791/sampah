'use client';

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { getDemandForecast, type FormState } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { marketTrendsExample, salesDataExample } from '@/lib/data';
import { DollarSign, Lightbulb, LineChart, Package } from 'lucide-react';

const initialState: FormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? 'Forecasting...' : 'Generate Forecast'}
    </Button>
  );
}

export default function ForecastPage() {
  const [state, formAction] = useFormState(getDemandForecast, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.message !== 'Forecast generated successfully.') {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
    if (state.issues) {
      state.issues.forEach((issue) => {
        toast({
          variant: 'destructive',
          title: 'Invalid Input',
          description: issue,
        });
      });
    }
  }, [state, toast]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold">AI Demand Forecasting</h1>
        <p className="text-muted-foreground">
          Use AI to predict demand for recycled materials based on historical data and market trends.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Forecasting Tool</CardTitle>
            <CardDescription>Fill in the details below to get a demand forecast.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="material">Material Name</Label>
                <Input id="material" name="material" placeholder="e.g., HDPE" required defaultValue="HDPE" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="historicalSalesData">Historical Sales Data (JSON)</Label>
                <Textarea
                  id="historicalSalesData"
                  name="historicalSalesData"
                  rows={8}
                  defaultValue={salesDataExample}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="marketTrends">Market Trends (JSON)</Label>
                <Textarea id="marketTrends" name="marketTrends" rows={8} defaultValue={marketTrendsExample} required />
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {state.data ? (
            <>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <CardTitle>Demand Forecast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{state.data.demandForecast}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <CardTitle>Pricing Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{state.data.pricingStrategyRecommendation}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Package className="h-6 w-6" />
                  </div>
                  <CardTitle>Inventory Recommendation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{state.data.inventoryLevelRecommendation}</p>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card className="flex h-full min-h-[400px] items-center justify-center lg:min-h-full">
              <CardContent className="p-6 text-center text-muted-foreground">
                <LineChart className="mx-auto mb-4 h-12 w-12" />
                <h3 className="text-lg font-semibold">Forecast results will appear here</h3>
                <p className="text-sm">Enter data and run the forecast to see predictions.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
