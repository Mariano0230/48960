grammar Calculator;

// Reglas principales
program: statement*;

statement
    : arrayDeclaration
    | forStatement
    | consoleStatement
    ;

arrayDeclaration
    : 'let' Identifier '=' '[' expressionList? ']' ';'
    ;

forStatement
    : 'for' '(' assignmentStatement ';' assignmentStatement ')' block
    ;

assignmentStatement
    : Identifier '=' expression
    ;

consoleStatement
    : 'console' '.' 'log' '(' expression ')' ';'
    ;

block
    : '{' statement* '}'
    ;

expressionList
    : expression (',' expression)*
    ;

expression
    : term (( '+' | '-' | '*' | '/' ) term)*
    ;

term
    : Identifier
    | Number
    | '(' expression ')'
    ;

// Tokens
Identifier
    : [a-zA-Z_] [a-zA-Z0-9_]*
    ;

Number
    : [0-9]+
    ;

// Ignorar espacios en blanco y saltos de línea
WS
    : [ \t\r\n]+ -> skip
    ;
