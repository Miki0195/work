"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { Search, FileText, Home, Info, Briefcase, DollarSign, FolderOpen, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION } from "@/lib/constants";
import { services } from "@/content/services";
import { caseStudies } from "@/content/case-studies";

interface CommandItem {
  id: string;
  title: string;
  description?: string;
  href: string;
  icon: React.ReactNode;
  category: string;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const scrollPosRef = useRef(0);

  const iconMap: Record<string, React.ReactNode> = {
    "/": <Home size={18} />,
    "/about": <Info size={18} />,
    "/services": <Briefcase size={18} />,
    "/pricing": <DollarSign size={18} />,
    "/work": <FolderOpen size={18} />,
    "/contact": <Mail size={18} />,
  };

  // Build command items
  const commands: CommandItem[] = [
    // Main pages
    ...NAVIGATION.map(nav => ({
      id: nav.href,
      title: nav.name,
      href: nav.href,
      icon: iconMap[nav.href] || <FileText size={18} />,
      category: "Oldalak",
    })),
    // Services
    ...services.map(service => ({
      id: `service-${service.slug}`,
      title: service.title,
      description: service.subtitle,
      href: `/services/${service.slug}`,
      icon: <Briefcase size={18} />,
      category: "Szolgáltatások",
    })),
    // Case studies
    ...caseStudies.map(study => ({
      id: `case-${study.slug}`,
      title: study.title,
      description: study.client,
      href: `/work/${study.slug}`,
      icon: <FolderOpen size={18} />,
      category: "Esettanulmányok",
    })),
  ];

  // Keyboard shortcuts
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        e.stopPropagation();
        // Save current scroll position
        scrollPosRef.current = window.scrollY;
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Handle closing and scroll restoration
  useEffect(() => {
    if (!open) {
      setSearch("");
      // Restore scroll position after a brief delay
      const scrollPos = scrollPosRef.current;
      setTimeout(() => {
        window.scrollTo({ top: scrollPos, behavior: 'instant' });
      }, 0);
    }
  }, [open]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      // Save scroll position
      scrollPosRef.current = window.scrollY;
      
      // Prevent body scroll
      const previousOverflow = document.body.style.overflow;
      const previousPosition = document.body.style.position;
      const previousTop = document.body.style.top;
      const previousWidth = document.body.style.width;
      
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosRef.current}px`;
      document.body.style.width = '100%';
      
      return () => {
        document.body.style.overflow = previousOverflow;
        document.body.style.position = previousPosition;
        document.body.style.top = previousTop;
        document.body.style.width = previousWidth;
        
        // Restore scroll position
        window.scrollTo({ top: scrollPosRef.current, behavior: 'instant' });
      };
    }
  }, [open]);

  const handleSelect = useCallback((href: string) => {
    setOpen(false);
    setTimeout(() => {
      router.push(href);
    }, 100);
  }, [router]);

  const handleClose = useCallback((e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setOpen(false);
  }, []);

  // Filter commands based on search
  const filteredCommands = commands.filter(cmd => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return (
      cmd.title.toLowerCase().includes(searchLower) ||
      cmd.description?.toLowerCase().includes(searchLower) ||
      cmd.category.toLowerCase().includes(searchLower)
    );
  });

  // Group by category
  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) {
      acc[cmd.category] = [];
    }
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<string, CommandItem[]>);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              e.preventDefault();
              handleClose();
            }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Command Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-[101] px-4"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <Command
              className="glass rounded-xl shadow-2xl border border-dark-700 overflow-hidden"
              label="Parancs menü"
              shouldFilter={false}
              loop
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === 'Escape') {
                  e.preventDefault();
                  e.stopPropagation();
                  handleClose(e);
                }
              }}
            >
              <div className="flex items-center border-b border-dark-800 px-4">
                <Search className="text-dark-400 mr-3 flex-shrink-0" size={20} />
                <Command.Input
                  value={search}
                  onValueChange={setSearch}
                  placeholder="Keresés oldalak, szolgáltatások között..."
                  className="w-full py-4 bg-transparent text-white placeholder-dark-400 outline-none"
                  autoFocus
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                />
              </div>

              <Command.List className="max-h-[400px] overflow-y-auto p-2 scroll-py-2">
                {Object.keys(groupedCommands).length === 0 && (
                  <Command.Empty className="py-8 text-center text-dark-400">
                    Nincs találat
                  </Command.Empty>
                )}

                {Object.entries(groupedCommands).map(([category, items]) => (
                  <Command.Group
                    key={category}
                    heading={category}
                    className="text-dark-400 text-xs font-semibold uppercase tracking-wider px-2 py-2"
                  >
                    {items.map((item) => (
                      <Command.Item
                        key={item.id}
                        value={item.title}
                        keywords={[item.title, item.description || '', item.category]}
                        onSelect={() => handleSelect(item.href)}
                        className="flex items-start space-x-3 px-3 py-3 rounded-lg cursor-pointer aria-selected:bg-dark-800 data-[selected=true]:bg-dark-800 transition-colors mb-1"
                      >
                        <div className="text-primary-400 mt-0.5 flex-shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white font-medium text-sm">
                            {item.title}
                          </div>
                          {item.description && (
                            <div className="text-dark-400 text-xs mt-0.5 truncate">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </Command.Item>
                    ))}
                  </Command.Group>
                ))}
              </Command.List>

              <div className="border-t border-dark-800 px-4 py-3 flex items-center justify-between text-xs text-dark-400">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <kbd className="px-1.5 py-0.5 bg-dark-800 rounded text-dark-300">↑↓</kbd>
                    <span>navigálás</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <kbd className="px-1.5 py-0.5 bg-dark-800 rounded text-dark-300">↵</kbd>
                    <span>kiválaszt</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <kbd className="px-1.5 py-0.5 bg-dark-800 rounded text-dark-300">esc</kbd>
                  <span>bezár</span>
                </div>
              </div>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
