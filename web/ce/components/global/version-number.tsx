// assets
import packageJson from "package.json";

export const FixitVersionNumber: React.FC = () => <span>Version: v{packageJson.version}</span>;
