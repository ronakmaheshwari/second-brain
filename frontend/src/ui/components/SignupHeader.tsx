export default function SignupHeader() {
    return (
      <div className="flex flex-col w-full items-center text-center space-y-1">
        <img
          src="https://img.icons8.com/ios/50/000000/brain--v1.png"
          alt="brain"
          className="w-14 h-14"
        />
        <h3 className="text-2xl font-bold tracking-tight">Join Second Brain</h3>
        <p className="text-md font-medium text-gray-500 max-w-sm text-muted-foreground">
          Your digital second brain for capturing, organizing, and connecting your ideas.
        </p>
      </div>
    );
  }
  