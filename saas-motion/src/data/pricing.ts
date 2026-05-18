export type PlanType = {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
};
export const plans:{ monthly: PlanType[]; yearly: PlanType[] } = {
  monthly: [
    { name: "Starter", price: 9, features: ["1 Project", "Analytics", "Email Support"] },
    { name: "Pro", price: 29, features: ["Unlimited Projects", "Advanced Analytics", "Priority Support"], popular: true },
    { name: "Enterprise", price: 99, features: ["Unlimited Everything", "Team Access", "Dedicated Support"] },
  ],
  yearly: [
    { name: "Starter", price: 90, features: ["1 Project", "Analytics", "Email Support"] },
    { name: "Pro", price: 290, features: ["Unlimited Projects", "Advanced Analytics", "Priority Support"], popular: true },
    { name: "Enterprise", price: 990, features: ["Unlimited Everything", "Team Access", "Dedicated Support"] },
  ],
}