declare const YOUR_ZAN_API_KEY: string;
declare const YOUR_INFURA_API_KEY: string;
declare const YOUR_WALLET_CONNECT_PROJECT_ID: string;
declare const YOUR_TIPLINK_CLIENT_ID: string;

declare module '*.svg' {
  import type * as React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  export default ReactComponent;
}
