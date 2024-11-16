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
      <div className="max-w-default px-default w-full flex items-center justify-center flex-wrap lg:justify-between gap-6">
        <h2 className="flex flex-col items-center gap-1">
          Impacto gerado nos últimos dias
          <motion.span
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl font-bold"
          >
            {toBrazilianCurrency(impact)}
          </motion.span>
        </h2>
        <h2 className="flex flex-col items-center gap-1">
          Vendas realizadas até o momento
          <motion.span
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl font-bold "
          >
            {toBrazilianCurrency(sales)}
          </motion.span>
        </h2>
        <h2 className="flex flex-col items-center gap-1">
          Valor total de impacto
          <motion.span
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl font-bold "
          >
            {toBrazilianCurrency(totalValue)}
          </motion.span>
        </h2>
      </div>
    </section>
  );
}
