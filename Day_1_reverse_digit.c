int reverse(int x){
    long digit=0;
    int flag=0;
    if(x<0){
        if(x==INT_MIN){
            return 0;
        }
        x=-x;
        flag=1;}
    while(x>0){
         digit=(digit*10)+x%10;
        x=x/10;
        if(digit>INT_MAX){
            return 0;
        }
    }
    if(flag==1){
        digit=-digit;
    }
    return digit;
}