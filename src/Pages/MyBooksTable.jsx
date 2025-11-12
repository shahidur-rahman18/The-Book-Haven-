import React from "react";
import { Link } from "react-router";

const MyBooksTable = ({ book, handleDelete }) => {
  const { _id, title, author, coverImage } = book;

  return (
    <div className="w-full overflow-x-auto">
      <table className="table w-full table-auto">
        <tbody>
          <tr className="bg-base-400 hover:bg-base-300 rounded-xl my-2 transition-colors">
            {/* COLUMN 1 — IMAGE + TITLE (Fixed Width + Centered) */}
            <td className="py-4 px-2 w-5/12">
              <div className="flex items-center justify-start gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-14 w-14">
                    <img
                      src={coverImage}
                      alt="Book Cover"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-center sm:text-left max-w-[150px] md:max-w-none">
                  <div className="font-bold text-sm sm:text-base truncate">
                    {title}
                  </div>
                  <div className="text-xs opacity-50 truncate">{author}</div>
                </div>
              </div>
            </td>

            {/* COLUMN 2 — DATE (Always Centered) */}
            <td className="py-4 px-2 w-2/12 text-center">
              <div className="text-xs sm:text-sm opacity-70">date</div>
            </td>

            {/* COLUMN 3 — DELETE (Fixed Button) */}
            <td className="py-4 px-2 w-2/12 text-center">
              <button onClick={()=>handleDelete(_id)} className="btn btn-primary btn-xs w-16">Delete</button>
            </td>

            {/* COLUMN 4 — UPDATE (Fixed Button) */}
            <td className="py-4 px-2 w-2/12 text-center">
             <Link to={`/update-book/${_id}`} className="btn btn-primary btn-xs w-16">
                Update
              </Link>
            </td>
          </tr>
        </tbody>
      </table>



      
    </div>
  );
};

export default MyBooksTable;