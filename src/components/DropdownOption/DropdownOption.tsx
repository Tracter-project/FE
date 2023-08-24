import React, { useState } from "react";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import styles from "./DropdownOption.module.scss";

interface DropdownOptionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function DropdownOption({
  title,
  children,
  className,
}: DropdownOptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`${styles.dropdownOption} ${
        isExpanded ? styles.expanded : ""
      } ${className}`}
      onClick={handleToggle}
    >
      <span>{title}</span>
      {isExpanded ? <VscTriangleUp /> : <VscTriangleDown />}
      {isExpanded && (
        <div className={`${styles.optionContent} ${isExpanded ? "show" : ""}`}>
          {children}
        </div>
      )}
    </div>
  );
}
