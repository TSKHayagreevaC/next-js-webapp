// components/Breadcrumbs.tsx

import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="bg-gray-200">
      <ol className="flex">
        {items.map((item, index) => (
          <li key={item.label}>
            <Link href={item.href}>
              <span className="text-blue-600 hover:underline">
                {item.label}
              </span>
            </Link>
            {index < items.length - 1 && (
              <span className="mx-2">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
