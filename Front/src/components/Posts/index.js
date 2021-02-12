import ReactAudioPlayer from 'react-audio-player';

import React from 'react';

import './posts.css';


const Posts = ({data}) => {
console.log(data);
return(
    <div>
<h1>Titre</h1>
{/* <ReactAudioPlayer
        src={url}
        controls
        preload='auto'
      /> */}
<p>Desciprion</p>
  </div>
)};




export default Posts;

     /**
     * @Route("/account/{id}", name="account_delete", methods={"DELETE"}, requirements={"id"="\d+"})
     */
    public function delete(UserInterface $user)
    {
        if ($user !== $this->getUser()) {
            throw $this->createAccessDeniedException('You can\'t delete another person\'s account!');
        }

        /** @var AppUser $user */
        $user = $this->getUser();
        $manager = $this->getDoctrine()->getManager();

        $manager->remove($user);
        $manager->flush();

        return $this->json(
            [
                "success" => true
            ],
            Response::HTTP_OK
        );
    }
