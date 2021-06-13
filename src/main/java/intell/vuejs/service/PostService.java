package intell.vuejs.service;

import intell.vuejs.entity.Post;
import intell.vuejs.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<Post> getAllPost(){
        return postRepository.findAll();
    }

    public void insert(Post post){
        postRepository.save(post);
    }
}
