export default function ModuleItem({ title, subtitle, duration, hasArrow }) {
    return (
      <div className="flex items-center justify-between py-3 border-b last:border-0 border-gray-200">
        <div>
          <p className="text-sm font-medium text-gray-800">{title}</p>
  
          {subtitle && (
            <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>
          )}
        </div>
  
        <div className="flex items-center gap-2 text-gray-500">
          {duration && <p className="text-xs">{duration}</p>}
          {hasArrow && <span className="text-lg">›</span>}
        </div>
      </div>
    );
  }
  