/**
 * Configurações de idioma e localização do sistema
 * Language and locale settings for the system
 */
export const localeConfig = {
  language: 'pt-BR',
  locale: 'pt-BR',
  defaultLocale: 'pt-BR',
  availableLocales: ['pt-BR'] as const,
  dateFormat: 'dd/MM/yyyy',
  timeFormat: 'HH:mm',
  currency: 'BRL',
  timeZone: 'America/Sao_Paulo',
} as const;

export const defaultLocale = {
  lang: "pt-BR",
  timeZone: "America/Sao_Paulo",
};

export type Locale = typeof localeConfig.availableLocales[number];

/**
 * Gera uma data aleatória dentro dos últimos 15 dias
 * Retorna no formato dd/MM/yyyy (pt-BR)
 */
export function getRandomDate(): string {
  const today = new Date();
  const daysAgo = Math.floor(Math.random() * 15);
  const date = new Date(today);
  date.setDate(today.getDate() - daysAgo);
  return date.toLocaleDateString('pt-BR', { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric' 
  });
}

/**
 * Gera uma data aleatória dentro dos últimos 15 dias no formato ISO (YYYY-MM-DD)
 * Útil para manter consistência entre diferentes formatos
 */
export function getRandomDateISO(): string {
  const today = new Date();
  const daysAgo = Math.floor(Math.random() * 15);
  const date = new Date(today);
  date.setDate(today.getDate() - daysAgo);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

