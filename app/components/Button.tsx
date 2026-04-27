import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'ternary';
    forceState?: 'normal' | 'hover' | 'active';
    children: React.ReactNode;
};

export default function Button({
    variant = 'primary',
    forceState = 'normal',
    children,
    className = '',
    ...props
}: ButtonProps) {

    // 1. Base structural styling
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 font-mono text-xs font-bold tracking-[0.2em] uppercase focus:outline-none transition-all duration-300 z-10 group";

    // 2. Variant Routing
    let variantStyles = "";
    let fillLayerColor = "";
    let showBrackets = false; // Toggle brackets based on variant

    switch (variant) {
        case 'primary':
            // NEW PRIMARY: Full stroke (border), fills with Sulfur Yellow
            variantStyles = "text-bio-primary border border-bio-primary";
            fillLayerColor = "bg-bio-accent";
            showBrackets = false; // Full stroke replaces the need for brackets

            if (forceState === 'hover') variantStyles += " text-bio-primary";
            if (forceState === 'active') variantStyles += " scale-95 opacity-90";
            break;

        case 'secondary':
            // NEW SECONDARY (Old Primary): No border, relies on brackets, fills with Sulfur Yellow
            variantStyles = "text-bio-primary";
            fillLayerColor = "bg-bio-accent";
            showBrackets = true;

            if (forceState === 'hover') variantStyles += " text-bio-primary";
            if (forceState === 'active') variantStyles += " scale-95 opacity-90";
            break;

        case 'ternary':
            // TERNARY: Ghost button with subtle panel fill
            variantStyles = "text-bio-primary/70";
            fillLayerColor = "bg-bio-panel";
            showBrackets = true;

            if (forceState === 'hover') variantStyles += " text-bio-primary";
            if (forceState === 'active') variantStyles += " scale-95 opacity-90";
            break;
    }

    // 3. Hover Fill Animation Logic
    const hoverFillScale = forceState === 'hover' ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100';

    return (
        <button
            className={`${baseStyles} ${variantStyles} ${className}`}
            {...props}
        >
            {/* The Vertical Fill Layer */}
            <span
                className={`absolute inset-0 w-full h-full ${fillLayerColor} origin-center transition-transform duration-400 ease-in-out -z-10 ${hoverFillScale}`}
                aria-hidden="true"
            ></span>

            {/* Left Bracket Edge (Conditionally Rendered) */}
            {showBrackets && (
                <span
                    className="absolute left-0 top-0 bottom-0 w-2 border-l-2 border-y-2 border-r-0 border-current opacity-80 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                ></span>
            )}

            {/* The Text Content */}
            <span className="relative z-10">{children}</span>

            {/* Right Bracket Edge (Conditionally Rendered) */}
            {showBrackets && (
                <span
                    className="absolute right-0 top-0 bottom-0 w-2 border-r-2 border-y-2 border-l-0 border-current opacity-80 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                ></span>
            )}
        </button>
    );
}