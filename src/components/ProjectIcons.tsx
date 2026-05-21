export function ProjectIcon({ slug, size = 32 }: { slug: string; size?: number }) {
  const icons: Record<string, React.ReactElement> = {
    beztami: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="16" height="24" rx="3" fill="#1F2937" />
        <rect x="6" y="7" width="12" height="16" rx="1" fill="#374151" />
        <rect x="9" y="25.5" width="6" height="1.5" rx="0.75" fill="#5C6A52" />
        <circle cx="21" cy="12" r="7" fill="#E8B53D" />
        <path d="M21 16V10M18.5 12.5L21 10L23.5 12.5" stroke="#1F2937" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    "travel-ai": (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <path
          d="M28 16L18 14L14 4L11 5L13 15L4 18L3 21L13 21L16 28L19 27L18 22L28 19V16Z"
          fill="#5C6A52"
          stroke="#1F2937"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    menuqr: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="10" height="10" rx="1.5" fill="#1F2937" />
        <rect x="18" y="4" width="10" height="10" rx="1.5" fill="#1F2937" />
        <rect x="4" y="18" width="10" height="10" rx="1.5" fill="#1F2937" />
        <rect x="18" y="18" width="10" height="10" rx="1.5" fill="#E8B53D" />
        <circle cx="23" cy="23" r="2" fill="#1F2937" />
      </svg>
    ),
    "doctor-saas": (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect x="13" y="4" width="6" height="24" rx="1" fill="#C4622D" />
        <rect x="4" y="13" width="24" height="6" rx="1" fill="#C4622D" />
      </svg>
    ),
    "cv-screener": (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect x="6" y="3" width="20" height="26" rx="2" fill="#F4F1EA" stroke="#1F2937" strokeWidth="1.5" />
        <rect x="10" y="9" width="12" height="1.5" fill="#1F2937" />
        <rect x="10" y="13" width="8" height="1.5" fill="#5C6A52" />
        <rect x="10" y="17" width="12" height="1.5" fill="#5C6A52" />
        <rect x="10" y="21" width="6" height="1.5" fill="#5C6A52" />
        <circle cx="22" cy="22" r="4.5" fill="#E8B53D" stroke="#1F2937" strokeWidth="1" />
        <path d="M19.5 22L21.5 24L24.5 20.5" stroke="#1F2937" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    "helpdesk-bot": (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect x="3" y="6" width="26" height="18" rx="2.5" fill="#1F2937" />
        <rect x="6" y="9" width="20" height="12" rx="1" fill="#C8D2BE" />
        <circle cx="11" cy="15" r="1.5" fill="#1F2937" />
        <circle cx="16" cy="15" r="1.5" fill="#1F2937" />
        <circle cx="21" cy="15" r="1.5" fill="#1F2937" />
        <rect x="13" y="24" width="6" height="3" fill="#1F2937" />
        <rect x="10" y="27" width="12" height="1.5" rx="0.5" fill="#1F2937" />
      </svg>
    ),
    "email-triage": (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect x="3" y="6" width="26" height="20" rx="2" fill="#F4F1EA" stroke="#1F2937" strokeWidth="1.5" />
        <path d="M3 8L16 18L29 8" stroke="#1F2937" strokeWidth="1.5" fill="none" />
        <circle cx="24" cy="9" r="4" fill="#E8B53D" stroke="#1F2937" strokeWidth="1" />
        <path d="M22 9L23.5 10.5L26 8" stroke="#1F2937" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  };

  return icons[slug] ?? null;
}
