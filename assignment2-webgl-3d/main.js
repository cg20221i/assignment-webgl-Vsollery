function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertices = [
    // NUMBER 6

        //6  front RED   1 // Surface orientation
        -0.8,  1.5, 1,        1, 0, 0,    0, 0, -1,   // Index:  0    
        -0.6,  1.5,1,         1, 0, 0,    0, 0, -1,   // Index:  1
        -0.6, -0.1,1,         1, 0, 0,    0, 0, -1,   // Index:  2
        -0.8, -0.1, 1,        1, 0, 0,    0, 0, -1,   // Index:  3
        // 6 front RED    2   // red
        -0.1,  -0.1, 1,      1, 0, 0,    0, 0, -1,    // Index:  4
        -0.1,  0.1,   1,     1, 0, 0,    0, 0, -1,    // Index:  5
        -0.6, 0.1,   1,      1, 0, 0,    0, 0, -1,    // Index:  6
        -0.6, -0.1, 1,       1, 0, 0,    0, 0, -1,    // Index:  7
        // 6 front RED   3    // red
        -0.1, 0.4,  1,     1, 0, 0,    0, -1, 0,   // Index:  8
        -0.3, 0.4,  1,     1, 0, 0,    0, -1, 0,   // Index:  9
        -0.3, 0.1,  1,     1, 0, 0,    0, -1, 0,   // Index: 10
        -0.1, 0.1,  1,     1, 0, 0,    0, -1, 0,   // Index: 11
        //  6 front RED 4     // red
        -0.1, 0.4,  1,      1, 0, 0,   0, -1, 0,     // Index: 12
        -0.1, 0.7,  1,      1, 0, 0,    0, -1, 0,    // Index: 13
        -0.6, 0.7,  1,      1, 0, 0,    0, -1, 0,    // Index: 14
        -0.6, 0.4, 1,       1, 0, 0,    0, -1, 0,     // Index: 15
        //  6 front RED 5     
        -0.6, 1.5,  1,      1, 0, 0,    0, -1, 0,     // Index: 16
        -0.6, 1.2,  1,      1, 0, 0,    0, -1, 0,    // Index: 17
        -0.1, 1.2,  1,      1, 0, 0,    0, -1, 0,    // Index: 18
        -0.1, 1.5, 1,       1, 0, 0,    0, -1, 0,     // Index: 19

        // 6 back YELLOW 1 
        -0.8,  1.5, 0.5,         1, 1, 0,    0, 0, 1,   // Index:  20    
        -0.6,  1.5, 0.5,         1, 1, 0,    0, 0, 1,   // Index:  21
        -0.6, -0.1,0.5,          1, 1, 0,    0, 0, 1,   // Index:  22
        -0.8, -0.1, 0.5,         1, 1, 0,    0, 0, 1,     // Index: 23
        //6 back YELLOW 2 
        -0.1,  -0.1, 0.5,         1, 1, 0,    0, 0, 1,   // Index:  24    
        -0.1,  0.1,  0.5,         1, 1, 0,    0, 0, 1,   // Index:  25
        -0.6, 0.1,   0.5,         1, 1, 0,    0, 0, 1,   // Index:  26
        -0.6, -0.1,  0.5,         1, 1, 0,    0, 0, 1,     // Index: 27
        // 6 back YELLOW 3 
        -0.1, 0.4,  0.5,     1, 1, 0,    0, 0, 1,   // Index:  28
        -0.3, 0.4,  0.5,     1, 1, 0,    0, 0, 1,   // Index:  29
        -0.3, 0.1,  0.5,     1, 1, 0,    0, 0, 1,   // Index: 30
        -0.1, 0.1,  0.5,     1, 1, 0,    0, 0, 1,   // Index: 31
        // 6 back YELLOW 4 
        -0.1, 0.4,  0.5,      1, 1, 0,    0, 0, 1,     // Index: 32
        -0.1, 0.7,  0.5,      1, 1, 0,    0, 0, 1,    // Index: 33
        -0.8, 0.7,  0.5,      1, 1, 0,    0, 0, 1,    // Index: 34
        -0.8, 0.4, 0.5,       1, 1, 0,    0, 0, 1,     // Index: 34
        // 6 back YELLOW 5 
        -0.6, 1.5,  0.5,      1, 1, 0,    0, 0, 1,     // Index: 35
        -0.6, 1.2,  0.5,      1, 1, 0,    0, 0, 1,    // Index: 36
        -0.1, 1.2,  0.5,      1, 1, 0,    0, 0, 1,    // Index: 37
        -0.1, 1.5, 0.5,       1, 1, 0,    0, 0, 1,     // Index: 38

        // 6 GREEN 1        
        -0.8,  1.5, 1,       0, 1, 0,    -1, 0, 0,   // Index:  39   
        -0.8,  1.5,0.5,      0, 1, 0,    -1, 0, 0,  // Index:  40
        -0.8, -0.1, 0.5,     0, 1, 0,    -1, 0, 0, // Index: 41
        -0.8,  -0.1, 1,      0, 1, 0,    -1, 0, 0,   // Index:  42
        // 6 GREEN 2     
        -0.3, 0.4, 1,     0, 1, 0,    -1, 0, 0,   // Index:  48
        -0.3, 0.4, 0.5,   0, 1, 0,    -1, 0, 0,   // Index:  49
        -0.3, 0.1, 0.5,   0, 1, 0,    -1, 0, 0,    // Index:  50
        -0.3, 0.1, 1,     0, 1, 0,    -1, 0, 0,    // Index: 51

        // 6 WHITE 1   
        -0.8, -0.1, 0.5,      1, 1, 1,    -1, 0, 0,    // Index:  52
        -0.8,  -0.1, 1.,      1, 1, 1,     -1, 0, 0,    // Index:  53
        -0.1, -0.1, 1,        1, 1, 1,    -1, 0, 0,    // Index:  54
        -0.1,  -0.1, 0.5,     1, 1, 1,    -1, 0, 0,   // Index:  55
        // 6 WHITE 2 
        -0.6, 0.4, 0.5,     1, 1, 1,     1, 0, 0,    // Index: 56
        -0.6, 0.4,   1,     1, 1, 1,     1, 0, 0,    // Index: 57
        -0.2, 0.4,   1,     1, 1, 1,     1, 0, 0,    // Index: 58
        -0.2, 0.4, 0.5,     1, 1, 1,     1, 0, 0,    // Index: 59
        // 6 WHITE 3 
        -0.6,  1.2,  0.5,    1, 1, 1,    0, -1, 0,   // Index: 60
        -0.6,  1.2,  1,      1, 1, 1,    0, -1, 0,   // Index: 61
        -0.1,  1.2,  1,      1, 1, 1,    0, -1, 0,   // Index: 62
        -0.1,  1.2,  0.5,    1, 1, 1,    0, -1, 0,   // Index: 63

        
        // 6 BLUE 1 
        -0.1,  1.5, 0.5,  0, 0, 1,    -1, 0, 0,   // Index:  64
        -0.1,  1.2, 0.5,  0, 0, 1,    -1, 0, 0,   // Index:  65
        -0.1,  1.2, 1,    0, 0, 1,    -1, 0, 0,   // Index: 66
        -0.1,  1.5, 1,    0, 0, 1,    -1, 0, 0,   // Index: 67
        //6 BLUE 2 
        -0.1,  -0.1,  0.5,     0, 0, 1,    0, 1, 0,    // Index: 68
        -0.1,  -0.1,  1,       0, 0, 1,    0, 1, 0,    // Index: 69
        -0.1,  0.7,  1,        0, 0, 1,     0, 1, 0,    // Index: 70
        -0.1,  0.7,  0.5,      0, 0, 1,    0, 1, 0 ,    // Index: 71
        // 6 BLUE 3 
        -0.6,  1.2, 0.5,       0, 0, 1,   -1, 0, 0,   // Index:  72
        -0.6,  1.2,   1,       0, 0, 1,    -1, 0, 0,   // Index:  73
        -0.6,  0.1,   1,      0, 0, 1,    -1, 0, 0,   // Index: 74
        -0.6,  0.1,   0.5,      0, 0, 1,   -1, 0, 0,   // Index: 75

        // 6 ORANGE 1 
         -0.8,   1.5, 0.5,     1, 0.5, 0,   1, 0, 0,    // Index: 76
         -0.8,   1.5,   1,     1, 0.5, 0,    1, 0, 0,    // Index: 77
         -0.1,   1.5,   1,     1, 0.5, 0,    1, 0, 0,    // Index: 78
         -0.1,   1.5, 0.5,     1, 0.5, 0,    1, 0, 0,    // Index: 79
        // 6 ORANGE 2
         -0.1,  0.7,    0.5,  1, 0.5, 0,    0, -1, 0,   // Index: 80
         -0.1,  0.7,    1,    1, 0.5, 0,   0, -1, 0,   // Index: 81
        -0.6,  0.7,     1,    1, 0.5, 0,    0, -1, 0,   // Index: 82
        -0.6,  0.7,    0.5,   1, 0.5, 0,    0, -1, 0,   // Index: 83
        // 6 ORANGE 3
        -0.6,  0.1,    0.5,  1, 0.5, 0,    0, -1, 0,   // Index: 84
        -0.6,  0.1,    1,    1, 0.5, 0,   0, -1, 0,   // Index: 85
       -0.3,  0.1,     1,    1, 0.5, 0,    0, -1, 0,   // Index: 86
       -0.3,  0.1,    0.5,   1, 0.5, 0,    0, -1, 0,   // Index: 87

    //NUMBER 1

       // 1 RED 1
        0.1,  1.5, 1,        1, 0, 0,    0, 0, -1,   // Index:  88    
        0.1,  -0.1,  1,       1, 0, 0,    0, 0, -1,   // Index:  89
        0.3,  -0.1,1,         1, 0, 0,    0, 0, -1,   // Index:  90
        0.3,  1.5, 1,        1, 0, 0,    0, 0, -1,   // Index:  91

        // 1 YELLOW 1
        0.1,  1.5, 0.5,        1, 1, 0,    0, 0, -1,   // Index:  99    
        0.1,  -0.1,  0.5,      1, 1, 0,    0, 0, -1,   // Index:  100
        0.3,  -0.1,0.5,        1, 1, 0,    0, 0, -1,   // Index:  101
        0.3,  1.5, 0.5,        1, 1, 0,    0, 0, -1,   // Index:  102

        //1 GREEN 1
        0.1,  1.5, 1,        0, 1, 0,   -1, 0, 0,   // Index:  103  
        0.1, -0.1, 1,      0, 1, 0,   -1, 0, 0,   // Index:  104
        0.1, -0.1, 0.5,      0, 1, 0,    -1, 0, 0,  // Index:  105
        0.1,  1.5, 0.5,        0, 1, 0,    -1, 0, 0,   // Index:  106

        //1 WHITE 1
        0.1,  -0.1, 1,        1, 1, 1,   -1, 0, 0,   // Index:  107  
        0.1, -0.1, 0.5,      1, 1, 1,   -1, 0, 0,   // Index:  108
        0.3, -0.1, 0.5,        1, 1, 1,    -1, 0, 0,   // Index:  109
        0.3, -0.1, 1,      1, 1, 1,    -1, 0, 0,  // Index:  110

        //1 BLUE 1
        0.3,  -0.1, 1,        0, 0, 1,   -1, 0, 0,   // Index:  111 
        0.3, -0.1, 0.5,       0, 0, 1,   -1, 0, 0,   // Index:  112 
        0.3, 1.5, 0.5,        0, 0, 1,   -1, 0, 0,   // Index:  113
        0.3, 1.5, 1,          0, 0, 1,   -1, 0, 0,  // Index:  114
       
        //1 ORANGE 1
        0.1,  1.5, 1,       1, 0.5, 0,   -1, 0, 0,   // Index:  115 
        0.1, 1.5, 0.5,      1, 0.5, 0,   -1, 0, 0,   // Index:  116
        0.3, 1.5, 0.5,      1, 0.5, 0,    -1, 0, 0,   // Index:  117
        0.3, 1.5, 1,        1, 0.5, 0,  -1, 0, 0,  // Index:  118

    //LETTER N

        //N RED 1
        -0.8,  -0.5, 1,        1, 0, 0,    0, 0, -1,   // Index:  119
        -0.8,   -1.5,  1,       1, 0, 0,    0, 0, -1,   // Index:  120   
        -0.6,  -1.5,  1,       1, 0, 0,    0, 0, -1,   // Index:  121
        -0.6,  -0.5,  1,       1, 0, 0,    0, 0, -1,   // Index:  123
        //N RED 2
        -0.5,  -0.5, 1,        1, 0, 0,    0, 0, -1,   // Index:  124
        -0.5,   -0.8,  1,       1, 0, 0,    0, 0, -1,   // Index:  125   
        -0.6,  -0.8,  1,       1, 0, 0,    0, 0, -1,   // Index:  126
        -0.6,  -0.5,  1,       1, 0, 0,    0, 0, -1,   // Index:  127
         //N RED 3
        -0.5,  -0.5, 1,        1, 0, 0,    0, 0, -1,   // Index:  128
        -0.5,  -1.5,  1,       1, 0, 0,    0, 0, -1,   // Index:  129
        -0.3,  -1.5,  1,       1, 0, 0,    0, 0, -1,   // Index:  130
        -0.3,   -0.5,  1,       1, 0, 0,    0, 0, -1,   // Index:  131 
        //N RED 4
        -0.3,  -1.5, 1,        1, 0, 0,    0, 0, -1,   // Index:  132
        -0.3,  -1.2,  1,       1, 0, 0,    0, 0, -1,   // Index:  133
        -0.2,  -1.2,  1,       1, 0, 0,    0, 0, -1,   // Index:  134
        -0.2,  -1.5,  1,       1, 0, 0,    0, 0, -1,   // Index:  135
         //N RED 5
         -0.2,  -1.5, 1,        1, 0, 0,    0, 0, -1,   // Index:  136
         -0.2,  -0.5,  1,       1, 0, 0,    0, 0, -1,   // Index:  137
          0,  -0.5,  1,       1, 0, 0,    0, 0, -1,   // Index:  138
          0,   -1.5,  1,       1, 0, 0,    0, 0, -1,   // Index:  139 
          
         //N YELLOW 1
         -0.8,  -0.5, 0.5,        1, 1, 0,    0, 0, 1,   // Index:  140
         -0.8,   -1.5,  0.5,       1, 1, 0,    0, 0, 1,   // Index:  141   
         -0.6,  -1.5,  0.5,       1, 1, 0,    0, 0, 1,   // Index:  142
         -0.6,  -0.5,  0.5,       1, 1, 0,    0, 0, 1,   // Index:  143
          //N YELLOW 2
        -0.5,  -0.5, 0.5,        1, 1, 0,    0, 0, 1,   // Index:  144
        -0.5,   -0.8,  0.5,       1, 1, 0,    0, 0, 1,   // Index:  145   
        -0.6,  -0.8,  0.5,       1, 1, 0,    0, 0, 1,   // Index:  146
        -0.6,  -0.5,  0.5,       1, 1, 0,    0, 0, 1,   // Index:  147
        //N YELLOW 3
        -0.5,  -0.5, 0.5,        1, 1, 0,    0, 0, 1,   // Index:  148
        -0.5,  -1.5,  0.5,       1, 1, 0,    0, 0, 1,   // Index:  149
        -0.3,  -1.5,  0.5,       1, 1, 0,    0, 0, 1,   // Index:  150
        -0.3,   -0.5,  0.5,       1, 1, 0,    0, 0, 1,   // Index:  151 
        //N YELLOW 4
        -0.3,  -1.5, 0.5,        1, 1, 0,    0, 0, 1,   // Index:  152
        -0.3,  -1.2,  0.5,       1, 1, 0,    0, 0, 1,   // Index:  153
        -0.2,  -1.2,  0.5,       1, 1, 0,    0, 0, 1,   // Index:  154
        -0.2,  -1.5,  0.5,       1, 1, 0,    0, 0, 1,   // Index:  155
        //N YELLOW 5
        -0.2,  -1.5, 0.5,        1, 1, 0,    0, 0, 1,   // Index:  156
        -0.2,  -0.5,  0.5,       1, 1, 0,    0, 0, 1,   // Index:  157
        0,  -0.5,  0.5,          1, 1, 0,    0, 0, 1,   // Index:  158
        0,   -1.5,  0.5,         1, 1, 0,    0, 0, 1,   // Index:  159 

        //N GREEN 1
        -0.8,  -0.5, 1,       0, 1, 0,    -1, 0, 0,   // Index:  160   
        -0.8,  -1.5,1,        0, 1, 0,    -1, 0, 0,  // Index:  161
        -0.8, -1.5, 0.5,      0, 1, 0,    -1, 0, 0, // Index: 162
        -0.8,  -0.5, 0.5,     0, 1, 0,    -1, 0, 0,   // Index:  163
        //N GREEN 2
        -0.5,  -0.8, 1,       0, 1, 0,    -1, 0, 0,   // Index:  164  
        -0.5,  -1.5, 1,       0, 1, 0,    -1, 0, 0,   // Index:  165 
        -0.5,  -1.5, 0.5,      0, 1, 0,    -1, 0, 0,  // Index:  166
        -0.5,  -0.8, 0.5,       0, 1, 0,    -1, 0, 0,   // Index:  167
        //N GREEN 3
        -0.2,  -0.5, 1,       0, 1, 0,    -1, 0, 0,   // Index:  168  
        -0.2,  -1.2, 1,       0, 1, 0,    -1, 0, 0,   // Index:  169 
        -0.2,  -1.2, 0.5,      0, 1, 0,    -1, 0, 0,  // Index:  170
        -0.2,  -0.5, 0.5,       0, 1, 0,    -1, 0, 0,   // Index:  171

        //N WHITE 1
        -0.8,  -1.5, 1,        1, 1, 1,   -1, 0, 0,   // Index:  172
        -0.8, -1.5, 0.5,      1, 1, 1,   -1, 0, 0,   // Index:  173
        -0.6, -1.5, 0.5,        1, 1, 1,    -1, 0, 0,   // Index:  174
        -0.6, -1.5, 1,      1, 1, 1,    -1, 0, 0,  // Index:  175
        //N WHITE 2
        0,   -1.5, 0.5,      1, 1, 1,    -1, 0, 0,  // Index:  176
        0,   -1.5, 1,        1, 1, 1,    -1, 0, 0,   // Index:  177
       -0.5,  -1.5, 1,        1, 1, 1,   -1, 0, 0,   // Index:  178  
       -0.5, -1.5, 0.5,      1, 1, 1,   -1, 0, 0,   // Index:  179
       //N WHITE 3
       -0.6,   -0.8, 0.5,      1, 1, 1,    -1, 0, 0,  // Index:  180
       -0.6,   -0.8, 1,        1, 1, 1,    -1, 0, 0,   // Index:  181
       -0.5,  -0.8, 1,        1, 1, 1,   -1, 0, 0,   // Index:  182
       -0.5, -0.8, 0.5,      1, 1, 1,   -1, 0, 0,   // Index:  183

       // N BLUE 1 
       -0.6,  -0.8, 1,  0, 0, 1,    -1, 0, 0,   // Index:  184
       -0.6,  -0.8, 0.5,  0, 0, 1,    -1, 0, 0,   // Index:  185
       -0.6,  -1.5, 0.5,    0, 0, 1,    -1, 0, 0,   // Index: 186
       -0.6,  -1.5, 1,    0, 0, 1,    -1, 0, 0,   // Index: 187
       // N BLUE 2 
       -0.3,  -1.2, 1,  0, 0, 1,    -1, 0, 0,   // Index:  188
       -0.3,  -0.5, 1,  0, 0, 1,    -1, 0, 0,   // Index:  189
       -0.3,  -0.5, 0.5,    0, 0, 1,    -1, 0, 0,   // Index: 190
       -0.3,  -1.2, 0.5,    0, 0, 1,    -1, 0, 0,   // Index: 191
        // N BLUE 2 
        0,  -1.5, 1,    0, 0, 1,    -1, 0, 0,   // Index:  192
        0,  -0.5, 1,     0, 0, 1,    -1, 0, 0,   // Index:  193
        0,  -0.5, 0.5,    0, 0, 1,    -1, 0, 0,   // Index: 194
        0,  -1.5, 0.5,    0, 0, 1,    -1, 0, 0,   // Index: 195

        // N ORANGE 1 
        -0.8,   -0.5, 0.5,     1, 0.5, 0,   1, 0, 0,    // Index: 196
        -0.8,   -0.5,   1,     1, 0.5, 0,    1, 0, 0,    // Index: 197
        -0.3,   -0.5,   1,     1, 0.5, 0,    1, 0, 0,    // Index: 198
        -0.3,   -0.5, 0.5,     1, 0.5, 0,    1, 0, 0,    // Index: 199
        // N ORANGE 2 
        -0.2,   -0.5, 0.5,     1, 0.5, 0,   1, 0, 0,    // Index: 200
        -0.2,   -0.5,   1,     1, 0.5, 0,    1, 0, 0,    // Index: 201
        0,   -0.5,   1,     1, 0.5, 0,    1, 0, 0,    // Index: 202
        0,   -0.5, 0.5,     1, 0.5, 0,    1, 0, 0,    // Index: 203

    //LETTER A 

        // A RED 1 
        0.1,  -1.5, 1,        1, 0, 0,    0, 0, -1,   // Index:  204   
        0.1,  -0.5,  1,       1, 0, 0,    0, 0, -1,   // Index:  205
        0.3,  -0.5,1,         1, 0, 0,    0, 0, -1,   // Index:  206
        0.3,  -1.5, 1,        1, 0, 0,    0, 0, -1,   // Index:  207
        // A RED 2 
        0.3,  -0.5, 1,        1, 0, 0,    0, 0, -1,   // Index:  208   
        0.5,  -0.5,  1,       1, 0, 0,    0, 0, -1,   // Index:  209
        0.5,  -0.7,1,         1, 0, 0,    0, 0, -1,   // Index:  210
        0.3,  -0.7, 1,        1, 0, 0,    0, 0, -1,   // Index:  211
        // A RED 3 
        0.5,  -1.5, 1,        1, 0, 0,    0, 0, -1,   // Index:  212   
        0.5,  -0.5,  1,       1, 0, 0,    0, 0, -1,   // Index:  213
        0.7,  -0.5,1,         1, 0, 0,    0, 0, -1,   // Index:  214
        0.7,  -1.5, 1,        1, 0, 0,    0, 0, -1,   // Index:  215
        // A RED 4 
        0.3,  -0.9, 1,        1, 0, 0,    0, 0, -1,   // Index:  215   
        0.3,  -1.1,  1,       1, 0, 0,    0, 0, -1,   // Index:  217
        0.5,  -1.1,  1,         1, 0, 0,    0, 0, -1,   // Index:  218
        0.5,  -0.9, 1,        1, 0, 0,    0, 0, -1,   // Index:  219

        // A YELLOW 1 
        0.1,  -1.5, 0.5,        1, 1, 0,    0, 0, 1,   // Index:  220    
        0.1,  -0.5,  0.5,       1, 1, 0,    0, 0, 1,   // Index:  221
        0.3,  -0.5, 0.5,         1, 1, 0,    0, 0, 1,   // Index:  222
        0.3,  -1.5, 0.5,        1, 1, 0,    0, 0, 1,   // Index: 223
        // A YELLOW 2 
        0.3,  -0.7, 0.5,        1, 1, 0,    0, 0, -1,   // Index:  224
        0.5,  -0.5,  0.5,       1, 1, 0,    0, 0, -1,   // Index:  225
        0.5,  -0.7 , 0.5,         1, 1, 0,    0, 0, -1,   // Index:  226
        0.3,  -0.5, 0.5,        1, 1, 0,    0, 0, -1,   // Index:  227
        // A YELLOW 3 
        0.5,  -1.5, 0.5,        1, 1, 0,    0, 0, 1,   // Index:  228  
        0.5,  -0.5,  0.5,       1, 1, 0,    0, 0, 1,   // Index:  229
        0.7,  -0.5, 0.5,         1, 1, 0,    0, 0, 1,   // Index:  230
        0.7,  -1.5, 0.5,        1, 1, 0,    0, 0, 1,   // Index:  231
        // A YELLOW 4 
        0.3,  -0.9, 0.5,        1, 1, 0,    0, 0, -1,   // Index:  232    
        0.3,  -1.1,  0.5,       1, 1, 0,    0, 0, -1,   // Index:  233
        0.5,  -1.1,  0.5,         1, 1, 0,    0, 0, -1,   // Index:  234
        0.5,  -0.9, 0.5,        1, 1, 0,    0, 0, -1,   // Index:  235
       
        // A GREEN 1 
        0.1,  -1.5, 1,        0, 1, 0,    0, 0, 1,   // Index:  236    
        0.1,  -0.5,  1,       0, 1, 0,    0, 0, 1,   // Index:  237
        0.1,  -0.5, 0.5,      0, 1, 0,    0, 0, 1,   // Index:  238
        0.1,  -1.5, 0.5,      0, 1, 0,    0, 0, 1,   // Index:  239
         // A GREEN 2 
        0.5,  -1.5, 1,        0, 1, 0,    0, 0, 1,   // Index:  240   
        0.5,  -0.5,  1,       0, 1, 0,    0, 0, 1,   // Index:  241
        0.5,  -0.5, 0.5,      0, 1, 0,    0, 0, 1,   // Index:  242
        0.5,  -1.5, 0.5,      0, 1, 0,    0, 0, 1,   // Index:  243
      
        //A WHITE 1
        0.1,  -1.5, 1,        1, 1, 1,   -1, 0, 0,   // Index:  244  
        0.3, -1.5, 1,         1, 1, 1,   -1, 0, 0,   // Index:  245
        0.3, -1.5, 0.5,       1, 1, 1,    -1, 0, 0,   // Index:  248
        0.1, -1.5, 0.5,       1, 1, 1,    -1, 0, 0,  // Index:  249
        //A WHITE 2
        0.5,  -1.5, 1,        1, 1, 1,   -1, 0, 0,   // Index:  250  
        0.7, -1.5, 1,         1, 1, 1,   -1, 0, 0,   // Index:  251
        0.7, -1.5, 0.5,       1, 1, 1,    -1, 0, 0,   // Index:  252
        0.5, -1.5, 0.5,       1, 1, 1,    -1, 0, 0,  // Index:  253
        //A WHITE 3
        0.3,  -1.1, 1,        1, 1, 1,   -1, 0, 0,   // Index:  254  
        0.5, -1.1, 1,         1, 1, 1,   -1, 0, 0,   // Index:  255
        0.5, -1.1, 0.5,       1, 1, 1,    -1, 0, 0,   // Index:  256
        0.3, -1.1, 0.5,       1, 1, 1,    -1, 0, 0,  // Index:  257
        //A WHITE 3
        0.3,  -0.7, 1,        1, 1, 1,   -1, 0, 0,   // Index:  258  
        0.5, -0.7, 1,         1, 1, 1,   -1, 0, 0,   // Index:  259
        0.5, -0.7, 0.5,       1, 1, 1,    -1, 0, 0,   // Index:  260
        0.3, -0.7, 0.5,       1, 1, 1,    -1, 0, 0,  // Index:  261

        // A BLUE 1 
       0.7,  -0.5, 0.5,  0, 0, 1,    -1, 0, 0,   // Index:  262
       0.7,  -1.5, 0.5,  0, 0, 1,    -1, 0, 0,   // Index:  263
       0.7,  -1.5, 1,    0, 0, 1,    -1, 0, 0,   // Index: 264
       0.7,  -0.5, 1,    0, 0, 1,    -1, 0, 0,   // Index: 265
      // A BLUE 1 
       0.3,  -0.5, 1,  0, 0, 1,    -1, 0, 0,   // Index:  266
       0.3,  -1.5, 1,  0, 0, 1,    -1, 0, 0,   // Index:  267
       0.3,  -1.5, 0.5,    0, 0, 1,    -1, 0, 0,   // Index: 268
       0.3,  -0.5, 0.5,    0, 0, 1,    -1, 0, 0,   // Index: 269

    // N ORANGE 1 
        0.1,   -0.5, 0.5,     1, 0.5, 0,   1, 0, 0,    // Index: 270
        0.1,   -0.5,   1,     1, 0.5, 0,    1, 0, 0,    // Index: 271
        0.7,   -0.5,   1,     1, 0.5, 0,    1, 0, 0,    // Index: 272
        0.7,   -0.5, 0.5,     1, 0.5, 0,    1, 0, 0,    // Index: 273
    // N ORANGE 2 
        0.3,   -0.9, 0.5,     1, 0.5, 0,   1, 0, 0,    // Index: 274
        0.3,   -0.9,   1,     1, 0.5, 0,    1, 0, 0,    // Index: 275
        0.5,   -0.9,   1,     1, 0.5, 0,    1, 0, 0,    // Index: 276
        0.5,   -0.9, 0.5,     1, 0.5, 0,    1, 0, 0,    // Index: 277

    //Cube
    // Face A       // Red      // Surface orientation
    -0.5, -0.5, -2,    1, 1, 1,     0, 0, -1,   // Index:  0    
    0.5, -0.5, -2,    1, 1, 1,     0, 0, -1,   // Index:  1
    0.5,  0.5, -2,    1, 1, 1,     0, 0, -1,   // Index:  2
    -0.5,  0.5, -2,    1, 1, 1,     0, 0, -1,   // Index:  3
    // Face B       // Yellow
    -0.5, -0.5,  -1,    1, 1, 1,     0, 0, 1,    // Index:  4
    0.5, -0.5,  -1,    1, 1, 1,     0, 0, 1,    // Index:  5
    0.5,  0.5,  -1,    1, 1, 1,     0, 0, 1,    // Index:  6
    -0.5,  0.5,  -1,    1, 1, 1,     0, 0, 1,    // Index:  7
    // Face C       // Green
    -0.5, -0.5, -2,     1, 1, 1,     -1, 0, 0,   // Index:  8
    -0.5,  0.5, -2,     1, 1, 1,     -1, 0, 0,   // Index:  9
    -0.5,  0.5,  -1,     1, 1, 1,     -1, 0, 0,   // Index: 10
    -0.5, -0.5,  -1,     1, 1, 1,     -1, 0, 0,   // Index: 11
    // Face D       // Blue
    0.5, -0.5, -2,    1, 1, 1,     1, 0, 0,    // Index: 12
    0.5,  0.5, -2,    1, 1, 1,     1, 0, 0,    // Index: 13
    0.5,  0.5,  -1,    1, 1, 1,     1, 0, 0,    // Index: 14
    0.5, -0.5,  -1,    1, 1, 1,     1, 0, 0,    // Index: 15
    // Face E       // Orange
    -0.5, -0.5, -2,    1, 1, 1,   0, -1, 0,   // Index: 16
    -0.5, -0.5,  -1,    1, 1, 1,   0, -1, 0,   // Index: 17
    0.5, -0.5,  -1,    1, 1, 1,   0, -1, 0,   // Index: 18
    0.5, -0.5, -2,     1, 1, 1,   0, -1, 0,   // Index: 19
    // Face F       // White
    -0.5,  0.5, -2,     1, 1, 1,    0, 1, 0,    // Index: 20
    -0.5,  0.5,  -1,     1, 1, 1,    0, 1, 0,    // Index: 21
    0.5,  0.5,  -1,     1, 1, 1,    0, 1, 0,    // Index: 22
    0.5,  0.5, -2,     1, 1, 1,    0, 1, 0     // Index: 23
];

   

    var indices = [
       0, 1, 2,     0, 2, 3,     
        4, 5, 6,     4, 6, 7,     
        8, 9, 10,    8, 10, 11,   
        12, 13, 14,  12, 14, 15,  
        16, 17, 18,  16, 18, 19,  
        20, 21, 22,  20, 22, 23,     
        24, 25, 26,  24, 26, 27,    
        28, 29, 30,  28, 30, 31,    
        32, 33, 34,  32, 34, 35,    
        36,	37,	38,	 36, 38, 39,    
        40,	41,	42,	 40, 42, 43,	
        44,	45,	46,	 44, 46, 47,	
        48,	49,	50,	 48, 50, 51,	
        52,	53,	54,	 52, 54, 55,	
        56,	57,	58,	 56, 58, 59,	
        60,	61,	62,	 60, 62, 63,	
        64,	65,	66,	 64, 66, 67,	
        68,	69,	70,	 68, 70, 71,	
        72,	73,	74,	 72, 74, 75,	
        76,	77,	78,	 76, 78, 79,	
        80,	81,	82,	 80, 82, 83,	
        84,	85,	86,	 84, 86, 87,	
        88,	89,	90,	 88, 90, 91,	
        92,	93,	94,	 92, 94, 95,	
        96,	97,	98,	 96, 98, 99,	
        100, 101, 102, 100,	102, 103,	
        104, 105, 106, 104,	106, 107,	
        108, 109, 110, 108,	110, 111,	
        112, 113, 114, 112,	114, 115,	
        116, 117, 118, 116,	118, 119,	
        120, 121, 122, 120, 122, 123,
        124, 125, 126, 124, 126,127,
        128, 129, 130, 128, 130, 131,
        132, 133, 134, 132, 134, 135,
        136, 137, 138, 136, 138, 139,
        140, 141, 142, 140, 142, 143,
        144, 145, 146, 144, 146, 147,
        148, 149, 150, 148, 150, 151,
        152, 153, 154, 152, 154, 155,
        156, 157, 158, 156, 158, 159,
        160, 161, 162, 160, 162, 163,
        164, 165, 166, 164, 166, 167,
        168, 169, 170, 168, 170, 171,
        172, 173, 174, 172, 174, 175,
        176, 177, 178, 176, 178, 179,
        180, 181, 182, 180, 182, 183,
        184, 185, 186, 184, 186, 187,
        188, 189, 190, 188, 190, 191,
        192, 193, 194, 192, 194, 195,
        196, 197, 198, 196, 198, 199,
        200, 201, 202, 200, 202, 203,
        204, 205, 206, 204, 206, 207,
        208, 209, 210, 208, 210, 211,
        212, 213, 214, 212, 213, 215,
        216, 217, 218, 216, 218, 219,
        220, 221, 222, 220, 222, 223,
        224, 225, 226, 224, 226, 227,
        228, 229, 230, 228, 230, 231,
        232, 233, 234, 232, 234, 235,
        236, 237, 238, 236, 238, 239,
        240, 241, 242, 240, 242, 243,
        244, 245, 246, 244, 246, 247,
        248, 249, 250, 248, 250, 251,
        252, 253, 254, 252, 254, 255,
        256, 257, 258, 256, 258, 259,

        //CUBE 
        260, 261, 262, 260, 262,263,
        264, 265, 266, 264, 266, 267,
        268, 269, 270, 268, 270,271,
        272, 273, 274, 272, 274, 275,
        276, 277, 278, 276, 278, 279,
        280, 281, 282, 280, 282, 283,
        284, 285, 286, 284, 286, 287,
        288, 289, 290, 288, 290, 291,
        292, 293, 294, 292, 294, 295,
        296, 297, 298, 296, 298, 299,
        300, 301, 302, 300, 302, 303,
        304, 305, 306, 304, 306, 307,
        308, 309, 310, 308, 310, 311,
        // 270, 271, 272, 270, 272, 273,
        // 274, 275, 276, 274, 274, 277,
        // 278, 279, 280, 278, 280, 281,
        // 282, 283, 284, 282, 284, 285,
        // 286, 287, 288, 286, 288, 289,
        // 290, 291, 292, 290, 292, 293,
        // 294, 295, 296, 294, 296, 297,
        // 298, 299, 300, 298, 300, 301,
        // 302, 303, 304, 302, 304, 305,
        // 306, 307, 308, 306, 308, 309,
        // 310, 311, 312, 310, 312, 313,
        // 314, 315, 316, 314, 316, 317,
        // 318, 319, 320, 318, 320, 321,
        // 322, 323, 324, 322, 324, 325,  

     ];

    // var vertices = [
    //     //box 1 face 1 // color    //surface rotation
    //     -3, 5, 1,      1, 0, 0,    0, 0, -1,
    //     -1, 5, 1,      1, 0, 0,    0, 0, -1,
    //     -3, 3, 1,      1, 0, 0,    0, 0, -1,
    //     -1, 3, 1,      1, 0, 0,    0, 0, -1,
    // ]


    // Create a linked-list for storing the vertices data in the GPU realm
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // VERTEX SHADER
    var vertexShaderCode = `
        attribute vec3 aPosition;
        attribute vec3 aColor;
        attribute vec3 aNormal;
        uniform mat4 uModel;
        uniform mat4 uView;
        uniform mat4 uProjection;
        varying vec3 vPosition;
        varying vec3 vColor;
        varying vec3 vNormal;
        void main () {
            vec4 position = vec4(aPosition, 1.0);
            gl_Position = uProjection * uView * uModel * position;
            // gl_Position is the final destination for storing
            //  positional data for the rendered vertex
            vColor = aColor;
            vNormal = aNormal;
            vPosition = (uModel * position).xyz;
        }
    `;
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    // FRAGMENT SHADER
    var fragmentShaderCode = `
        precision mediump float;
        varying vec3 vColor;
        uniform vec3 uLightConstant;      // It represents the light color
        uniform float uAmbientIntensity;  // It represents the light intensity
        varying vec3 vPosition;
        varying vec3 vNormal;
        uniform vec3 uLightPosition;
        uniform vec3 uViewerPosition;
        uniform mat3 uNormalModel;
        void main() {
            // vec3 ambient = uLightConstant * uAmbientIntensity;
            // vec3 phong = ambient;
            // gl_FragColor = vec4(phong * vColor, 1.0);
            vec3 ambient = uLightConstant * uAmbientIntensity;
            vec3 lightDirection = uLightPosition - vPosition;
            vec3 normalizedLight = normalize(lightDirection);
            vec3 normalizedNormal = normalize(uNormalModel * vNormal);
            float cosTheta = dot(normalizedNormal, normalizedLight);
            vec3 diffuse = vec3(0.0, 0.0, 0.0);
            if (cosTheta > 0.0) {
                float diffuseIntensity = cosTheta;
                diffuse = uLightConstant * diffuseIntensity;
            }
            vec3 normalizedReflector = normalize(reflect(-lightDirection, normalizedNormal));
            vec3 normalizedViewer = normalize(uViewerPosition - vPosition);
            float cosPhi = dot(normalizedReflector, normalizedViewer);
            vec3 specular = vec3(0.0, 0.0, 0.0);
            if (cosPhi > 0.) {
                float shininessConstant = 100.0;    // bare minimum spec for metal
                float specularIntensity = pow(cosPhi, shininessConstant);
                specular = uLightConstant * specularIntensity;
            }
            vec3 phong = ambient + diffuse + specular;
            gl_FragColor = vec4(phong * vColor, 1.0);
            // gl_FragColor is the final destination for storing
            //  color data for the rendered fragment
        }
    `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    // Comparing to C-Programming, we may imagine
    //  that up to this step we have created two
    //  object files (.o), for the vertex and fragment shaders

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    // Local variables
    var isAnimated = false;
    var theta = 0.0;
    var direction = "";
    var dX = 0.0;
    var dY = 0.0;
    // For the model (all linear transformation)
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    // For the camera
    var camera = [0.0, 0.0, 7.5];
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var view = glMatrix.mat4.create();  // Create an identity matrix
    glMatrix.mat4.lookAt(
        view,
        camera,
        [camera[0], 0.0, -10.0],
        [0.0, 1.0, 0.0]
    );
    gl.uniformMatrix4fv(uView, false, view);
    // For the projection
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    var perspective = glMatrix.mat4.create();
    glMatrix.mat4.perspective(
        perspective,
        ((Math.PI/2)-15),  // 75 degrees
        1.0,
        0.5, 
        50.0
    );
    gl.uniformMatrix4fv(uProjection, false, perspective);

    // For the lighting and shading
    var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
        // Ambient
    var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
    gl.uniform3fv(uLightConstant, [1.0, 1.0, 1.0]);   // white color
    gl.uniform1f(uAmbientIntensity, 0.161);             // 0.161 intensity
        // Diffuse
    var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
    gl.uniform3fv(uLightPosition, [0.5, 0.5, 2.0]);
    var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");
        // Specular
    var uViewerPosition = gl.getUniformLocation(shaderProgram, "uViewerPosition");

    // Local functions
        // MOUSE
    var dragging, prevx, prevy, rotation = glMatrix.mat4.create();
    function onMouseDown (event) {
        var x = event.clientX;
        var y = event.clientY;
        var rect = event.target.getBoundingClientRect();
        if (
            rect.left <= x &&
            rect.right >= x &&
            rect.top <= y &&
            rect.bottom >= y
        ) {
            dragging = true;
            prevx = x;
            prevy = y;
        }
    }
    function onMouseUp (event) {
        dragging = false;
    }
    function onMouseMove (event) {
        if (dragging) {
            var x = event.clientX;
            var y = event.clientY;
            var xdiff = x - prevx;
            var ydiff = y - prevy;
            var inverseRotation = glMatrix.mat4.create();
            glMatrix.mat4.invert(inverseRotation, rotation);
            var xAxis = [1, 0, 0, 0];
            var yAxis = [0, 1, 0, 0];
            glMatrix.vec4.transformMat4(xAxis, xAxis, inverseRotation);
            glMatrix.vec4.transformMat4(yAxis, yAxis, inverseRotation);
            glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(xdiff), yAxis);
            glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(ydiff), xAxis);
            prevx = x;
            prevy = y;
        }
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
        // KEYBOARD
    function onKeyDown (event) {
        switch (event.keyCode) {
            case 87: // Object UP
                direction = "up";
                break;
            case 83: // Object DOWN
                direction = "down";
                break;
            case 68: // Object RIGHT
                direction = "right";
                break;
            case 65: // Object LEFT
                direction = "left";
                break;
            case 38: // Camera UP
                camera[1] += 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 40: // Camera DOWN
                camera[1] -= 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 39: // Camera RIGHT
                camera[0] += 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 37: // Camera LEFT
                camera[0] -= 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            default:
                break;
        }
    }
    function onKeyUp (event) {
        direction = "";
    }
    function onKeyPress (event) {
        console.log('keypress');
        if (event.keyCode == 32) {  // Space button
            isAnimated = !isAnimated;
        }
    }
    document.addEventListener("keypress", onKeyPress)
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    // Teach the GPU how to collect
    //  the positional values from ARRAY_BUFFER
    //  for each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition, 
        3, 
        gl.FLOAT, 
        false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor, 
        3, 
        gl.FLOAT, 
        false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        3 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);
    var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
    gl.vertexAttribPointer(
        aNormal, 
        3, 
        gl.FLOAT, 
        false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        6 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aNormal);
    
    function render() {
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0.0, 0.0,   0.0,  1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        var model = glMatrix.mat4.create();
        if (isAnimated) {
            theta += 0.01;
        }
        switch (direction) {
            case "up":
                dY += 0.1;
                break;
            case "down":
                dY -= 0.1;
                break;
            case "left":
                dX -= 0.1;
                break;
            case "right":
                dX += 0.1;
                break;
        
            default:
                break;
        }
        glMatrix.mat4.translate(model, model, [dX, dY, 0.0]);
        glMatrix.mat4.rotateZ(rotation, rotation, theta);
        glMatrix.mat4.rotateY(rotation, rotation, theta);
        glMatrix.mat4.multiply(model, model, rotation);
        gl.uniformMatrix4fv(uModel, false, model);

        // For transforming the normal vector
        var normalModel = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);

        gl.drawElements(gl.TRIANGLES, indices.length, 
            gl.UNSIGNED_SHORT, 0);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}