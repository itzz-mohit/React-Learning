import React from "react";
import { useParams } from "react-router-dom";

function User() {
  // this userId will be same as the path userId
  const { userId } = useParams();
  return (
    <div className="bg-gray-600 text-white text-3xl p-4 text-center">
      User: {userId}
    </div>
  );
}

export default User;
