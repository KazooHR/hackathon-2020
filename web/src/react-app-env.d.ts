/// <reference types="react-scripts" />

interface Window extends Window {
  App: {
    FIREBASE_CONFIG: string;
    TENANT_ID: string;
  };
}

declare module "@okta/okta-react";

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}
