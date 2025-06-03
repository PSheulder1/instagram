 {%if request.user.is_authenticated%}
            <p class="font-bold">{{request.user.username}}</p>
            {%else%}
             <p class="font-bold">your_user_name</p>
            {%endif%}
