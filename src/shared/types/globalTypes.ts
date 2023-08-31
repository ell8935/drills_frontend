export interface ObjectLiteral {
  [key: string]: any;
}

export interface QuickActionItem {
  icon: JSX.Element;
  name: string;
  action: (id?: string, fullName?: string) => void;
  needsId: boolean;
}

export interface QuickActionsProps {
  actions: QuickActionItem[];
  id?: string;
}
