


//
// import { motion } from "framer-motion";
// import { Check, Mountain, Umbrella, Landmark, PartyPopper, UtensilsCrossed, Trees } from "lucide-react";
//
// // Reusable card component
// function InterestCard({ item, selected, onToggle }) {
//   return (
//     <motion.button
//       layout
//       whileHover={{ y: -3, scale: 1.01 }}
//       whileTap={{ scale: 0.98 }}
//       onClick={() => onToggle(item.id)}
//       onKeyDown={(e) => {
//         if (e.key === "Enter" || e.key === " ") {
//           e.preventDefault();
//           onToggle(item.id);
//         }
//       }}
//       aria-pressed={selected}
//       aria-label={`${item.title}${selected ? " selected" : ""}`}
//       tabIndex={0}
//       className={`group relative w-full overflow-hidden rounded-2xl border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 shadow-sm ${
//         selected ? "border-transparent ring-2 ring-offset-2 ring-indigo-500" : "border-gray-200"
//       }`}
//     >
//       {/* Image */}
//       <div className="relative h-40 w-full">
//         <img
//           src={item.image}
//           alt={item.title}
//           className="h-full w-full object-cover"
//           loading="lazy"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
//       </div>
//
//       {/* Content */}
//       <div className="absolute inset-x-0 bottom-0 p-4 text-left">
//         <div className="flex items-center gap-2 text-white drop-shadow">
//           <item.icon className="h-5 w-5" />
//           <p className="text-lg font-semibold">{item.title}</p>
//         </div>
//         <p className="mt-1 line-clamp-2 text-sm text-white/90">{item.subtitle}</p>
//       </div>
//
//       {/* Selection check */}
//       <div
//         className={`pointer-events-none absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur transition ${
//           selected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
//         }`}
//       >
//         <Check className={`h-5 w-5 ${selected ? "text-indigo-600" : "text-gray-700"}`} />
//       </div>
//     </motion.button>
//   );
// }
//
//
//
//
// export default function InterestSurveyCards() {
//
//
//   const toggle = (id) => {
//     setSelected((prev) =>
//       prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
//     );
//   };
//
//   const clearAll = () => setSelected([]);
//
//   const handleContinue = () => {
//     alert(`Selected interests: ${selected.join(", ") || "(none)"}`);
//   };
//
//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-white to-slate-50">
//       <div className="mx-auto max-w-5xl px-4 py-10">
//         {/* Header */}
//         <div className="mb-6 flex items-center justify-between">
//
//
//           {selected.length > 0 && (
//             <button
//               onClick={clearAll}
//               className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
//             >
//               Clear ({selected.length})
//             </button>
//           )}
//         </div>
//
//         {/* Grid */}
//         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {options.map((opt) => (
//             <InterestCard
//               key={opt.id}
//               item={opt}
//               selected={selected.includes(opt.id)}
//               onToggle={toggle}
//             />
//           ))}
//         </div>
//
//         {/* Footer / Selection preview */}
//         <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
//           <h2 className="text-base font-semibold">Your selection</h2>
//           {selected.length === 0 ? (
//             <p className="mt-1 text-slate-600">No interests selected yet.</p>
//           ) : (
//             <div className="mt-2 flex flex-wrap gap-2">
//               {selected.map((id) => {
//                 const label = options.find((o) => o.id === id)?.title ?? id;
//                 return (
//                   <span
//                     key={id}
//                     className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700"
//                   >
//                     {label}
//                   </span>
//                 );
//               })}
//             </div>
//           )}
//
//                 </div>
//
//
//       </div>
//     </div>
//   );
// }
