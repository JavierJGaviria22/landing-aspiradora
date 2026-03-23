declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

// Meta Pixel
interface Fbq {
  (command: 'init', pixelId: string): void;
  (command: 'track', event: string, data?: Record<string, any>): void;
}

declare function fbq(...args: any[]): void;
declare global {
  interface Window {
    fbq: Fbq;
  }
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}
