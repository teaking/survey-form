let user ={
};
let submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let dob = document.querySelector('#dob');
    let role = document.querySelector('#role');
    let willRecommend = document.querySelector('input[name="recommend"]:checked');
    let favouriteFeature = document.querySelector('#feature');
    let improve = Array.from(document.querySelectorAll('input[name="improved"]:checked'));
    let suggestion = document.querySelector('#comment');
    user.name = name.value;
    user.email = email.value;
    user.dob = dob.value;
    user.role = role.value;
    if(willRecommend){
        user.recommendation = willRecommend.value;
    }
    user.feature = favouriteFeature.value;
    user.improvement = improve.map( x => {
        return x.value;
    });
    user.suggestion = suggestion.value;

    console.log(user)
});
