import Preview from '../preview-canvas';

interface HeaderProps {
  userScore: number;
  handleOnPauseClicked: () => void;
  pieceName: string | null;
}

const Header = ({ userScore, handleOnPauseClicked, pieceName }: HeaderProps) => {
  return (
    <div className="w-full p-4 top-0 flex justify-center bg-accent-blue border-b-2 border-black">
      <div className="w-full max-w-lg flex justify-evenly gap-2 items-center">
        <button
          onClick={handleOnPauseClicked}
          className="cursor-pointer bg-white hover:bg-gray-200 text-black w-13 h-13 text-xs sprite sprite-shadows"
        >
          ||
        </button>

        <div className="flex-1 h-13 sprite sprite-shadows bg-white flex justify-center items-center text-black text-md capitalize font-black ">
          Polycases score: {userScore}
        </div>

        <Preview pieceName={pieceName} />
      </div>
    </div>
  );
};

export default Header;
