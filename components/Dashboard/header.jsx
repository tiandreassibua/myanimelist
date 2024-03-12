import BackButton from "../Shared/back-button";

export default function Header({ title, className }) {
    return (
        <div className={`flex justify-between items-center ${className}`}>
            <BackButton />
            <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
    );
}
