// import { Loader } from "@/components/shared"
// import { Button } from "@/components/ui/button"
// import { useUserContext } from "@/contex/AuthContext"
// import { useGetPostById } from "@/lib/react-query/queriesAndMutations"
// import { formatDate } from "@/lib/utils"
// import { useParams, Link } from "react-router-dom"
// const PostDetails = () => {
//   const { id } = useParams()
//   const { data: post, isPending } = useGetPostById(id || '')
//   const { user } = useUserContext()

//   const handleDeletePost = () => {}
//   return (
//         <div className="post_details-container">
//           {isPending ? <Loader /> : (
//             <div className="post_details-card">
//               <img 
//                 src={post?.imageUrl}
//                 alt="creators"
//                 className="post-details-img"
//               />
//               <div className="post_details-info">
//                 <div className="flex-between w-full">
//                 <Link to={'/profile/${post?.creators.$id}'} 
//                 className="flex items-center gap-3">
//                   <img 
//                     src={post?.creators?.imageUrl || '/assets/icons/profile-placeholder.svg' }
//                     alt="creators"
//                     className="rounded-full w-8 h-8:lgw-12 lg:h-12"
//                   />
                
//               <div className="flex flex-col">
//                 <p className="base-medium lg:body-body text-light-1">
//                   {post?.creators.name} 
//                 </p>
//                 <div className="flex-center gap-2 text-light-3">
//                   <p className="subtle-semibold lg:small-regula">
//                     {formatDate(post?.$createdAt)}
//                   </p>

//                   <p className="subtle-semibold lg:small-regular">
//                     {post?.location}
//                   </p>
//                 </div>
//               </div>
//               </Link>

//                 <div className="flex-center">
//                   <Link to={`/update-post/${post?.$id}`} className={`${user.id !== post?.creators.$id && 'hidden'}`}>
//                   <img src="/assets/icons/edit.svg"
//                     width={24}
//                     height={24} alt="edit"/>
//                   </Link>
//                   <Button
//                       onClick={handleDeletePost}
//                       variant="ghost"
//                       className={`ghost_details-delete_btn ${user.id !== post?.creators.$id && 'hidden'}`}
//                       >
//                         <img 
//                           src="/assets/icons/delete.svg"
//                           alt="delete"
//                           width={24}
//                           height={24}
//                         />
//                   </Button>
//                 </div>
//               </div>
//               <hr className="border w-full border-dark-4/80" />
//             </div>
//           </div>
//           )}
//     </div>
//   )
// }

// export default PostDetails






import { useParams, Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Loader } from "@/components/shared";
import { GridPostList, PostStats } from "@/components/shared";

import {
  useGetPostById,
  useGetUserPosts,
  useDeletePost,
} from "@/lib/react-query/queriesAndMutations";
import { multiFormatDateString } from "@/lib/utils";
import { useUserContext } from "@/contex/AuthContext";

const PostDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useUserContext();

  const { data: post, isPending } = useGetPostById(id || "");
  const { data: userPosts, isPending: isUserPostLoading } = useGetUserPosts(
    post?.creators.$id
  );
  const { mutate: deletePost } = useDeletePost();

  const relatedPosts = userPosts?.documents.filter(
    (userPost) => userPost.$id !== id
  );

  const handleDeletePost = () => {
    deletePost({ postId: id, imageId: post?.imageId });
    navigate(-1);
  };

  return (
    <div className="post_details-container">
      <div className="hidden md:flex max-w-5xl w-full">
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          className="shad-button_ghost">
          <img
            src={"/assets/icons/back.svg"}
            alt="back"
            width={24}
            height={24}
          />
          <p className="small-medium lg:base-medium">Back</p>
        </Button>
      </div>

      {isPending || !post ? (
        <Loader />
      ) : (
        <div className="post_details-card">
          <img
            src={post?.imageUrl}
            alt="creators"
            className="post_details-img"
          />

          <div className="post_details-info">
            <div className="flex-between w-full">
              <Link
                to={`/profile/${post?.creators.$id}`}
                className="flex items-center gap-3">
                <img
                  src={
                    post?.creators.imageUrl ||
                    "/assets/icons/profile-placeholder.svg"
                  }
                  alt="creators"
                  className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
                />
                <div className="flex gap-1 flex-col">
                  <p className="base-medium lg:body-bold text-light-1">
                    {post?.creators.name}
                  </p>
                  <div className="flex-center gap-2 text-light-3">
                    <p className="subtle-semibold lg:small-regular ">
                      {multiFormatDateString(post?.$createdAt)}
                    </p>
                    •
                    <p className="subtle-semibold lg:small-regular">
                      {post?.location}
                    </p>
                  </div>
                </div>
              </Link>

              <div className="flex-center gap-4">
                <Link
                  to={`/update-post/${post?.$id}`}
                  className={`${user.id !== post?.creators.$id && "hidden"}`}>
                  <img
                    src={"/assets/icons/edit.svg"}
                    alt="edit"
                    width={24}
                    height={24}
                  />
                </Link>

                <Button
                  onClick={handleDeletePost}
                  variant="ghost"
                  className={`ost_details-delete_btn ${
                    user.id !== post?.creators.$id && "hidden"
                  }`}>
                  <img
                    src={"/assets/icons/delete.svg"}
                    alt="delete"
                    width={24}
                    height={24}
                  />
                </Button>
              </div>
            </div>

            <hr className="border w-full border-dark-4/80" />

            <div className="flex flex-col flex-1 w-full small-medium lg:base-regular">
              <p>{post?.caption}</p>
              <ul className="flex gap-1 mt-2">
                {post?.tags.map((tag: string, index: string) => (
                  <li
                    key={`${tag}${index}`}
                    className="text-light-3 small-regular">
                    #{tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full">
              <PostStats post={post} userId={user.id} />
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-5xl">
        <hr className="border w-full border-dark-4/80" />

        <h3 className="body-bold md:h3-bold w-full my-10">
          More Related Posts
        </h3>
        {isUserPostLoading || !relatedPosts ? (
          <Loader />
        ) : (
          <GridPostList posts={relatedPosts} />
        )}
      </div>
    </div>
  );
};

export default PostDetails;
