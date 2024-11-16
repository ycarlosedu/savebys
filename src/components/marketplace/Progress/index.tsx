"use client";

import useAnimatedCounter from "@/hooks/useAnimatedCounter";
import { motion } from "motion/react";

import { toBrazilianCurrency } from "@/utils/toBrazilianCurrency";

export default function Progress() {
  const impact = useAnimatedCounter({ to: 103234.75 });
  const sales = useAnimatedCounter({ to: 36978.98 });
  const totalValue = useAnimatedCounter({ to: 287674.57 });

  return (
    <section className="bg-gray-light py-8 w-full flex flex-col items-center">
      <div className="max-w-default px-default w-full flex items-center justify-between">
        <span className="flex flex-col gap-1">
          <h2>Impacto gerado nos últimos dias</h2>
          <motion.p
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold "
          >
            {toBrazilianCurrency(impact)}
          </motion.p>
        </span>
        <span className="flex flex-col gap-1">
          <h2>Vendas realizadas até o momento</h2>
          <motion.p
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold "
          >
            {toBrazilianCurrency(sales)}
          </motion.p>
        </span>
        <span className="flex flex-col gap-1">
          <h2>Valor total de impacto</h2>
          <motion.p
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold "
          >
            {toBrazilianCurrency(totalValue)}
          </motion.p>
        </span>
      </div>
    </section>
  );
}
