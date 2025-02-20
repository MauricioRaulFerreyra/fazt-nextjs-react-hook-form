"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	username: z
		.string()
		.min(2, {
			message: "Username must be at least 2 characters",
		})
		.max(30),
});

type FormValues = z.infer<typeof formSchema>;

export default function Home() {
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
		},
	});

	const submit = form.handleSubmit((values) => {
		console.log(values);
	});

	return (
		<div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
			<Card className="w-full max-w-md shadow-lg">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold text-center">
						Welcome
					</CardTitle>
					<p className="text-sm text-slate-600 text-center">
						Enter your details to continue
					</p>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={submit} className="space-y-6">
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-sm font-medium">
											Username
										</FormLabel>
										<FormControl>
											<Input
												type="text"
												{...field}
												className="h-10 px-3 py-2 text-sm ring-offset-background 
                                 placeholder:text-slate-500 focus-visible:outline-none 
                                 focus-visible:ring-2 focus-visible:ring-slate-950 
                                 focus-visible:ring-offset-2"
												placeholder="Enter your username"
											/>
										</FormControl>
										<FormDescription className="text-xs text-slate-500">
											This is your public display name.
										</FormDescription>
										<FormMessage className="text-sm text-red-500" />
									</FormItem>
								)}
							/>
							<Button
								type="submit"
								className="w-full bg-slate-900 hover:bg-slate-800 text-white
                         transition-colors h-10 px-4 py-2"
							>
								Continue
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
}
