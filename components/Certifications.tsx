"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { certifications } from "@/data"

const Certifications = () => {
  return (
    <section id="certifications" className="py-20  capitalize">
      <h1 className="heading">
        My achievements &<span className="text-purple"> Certifications</span>
      </h1>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div style={{
                
                background: "rgb(4,7,29)",
                
                  backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100% ) !important",
                // add this border radius to make it more rounded so that the moving border is more realistic
                borderRadius: `calc(1.75rem* 0.96)`,
              }} className="overflow-hidden border border-gray-200 dark:border-slate-800 h-full hover:shadow-md transition-shadow duration-300">
                <div className="p-0">
                  <div className="flex flex-col h-auto">
                    <div className=" p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 overflow-hidden rounded-md  p-1 flex items-center justify-center">
                          <Image
                            src={cert.link || "/placeholder.svg"}
                            alt={cert.name}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{cert.name}</h3>
                          {cert.title && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 normal-case">{cert.title}</p>
                          )}
                        </div>
                      </div>
                      
                    </div>
                    <div className="p-6 flex-grow">
                      <p className="text-base normal-case">{cert.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

