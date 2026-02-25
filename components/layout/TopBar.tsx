import { SITE_CONFIG } from "@/contents/constants";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between bg-(--color-primary) px-6 py-2 text-xs text-(--color-secondary)">
      <div className="flex items-center space-x-4">
        <span className="flex items-center">
          <span className="material-icons-outlined mr-1 text-sm">phone</span>
          {SITE_CONFIG.phone}
        </span>
        <span className="flex items-center">
          <span className="material-icons-outlined mr-1 text-sm">email</span>
          {SITE_CONFIG.email}
        </span>
      </div>
      <div className="font-medium">Business Solutions</div>
    </div>
  );
}
