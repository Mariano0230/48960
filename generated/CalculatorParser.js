// Generated from Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorListener from './CalculatorListener.js';
const serializedATN = [4,1,21,95,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,5,0,22,8,0,10,0,12,0,25,9,0,
1,1,1,1,1,1,3,1,30,8,1,1,2,1,2,1,2,1,2,1,2,3,2,37,8,2,1,2,1,2,1,2,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,1,6,1,6,5,6,64,8,6,10,6,12,6,67,9,6,1,6,1,6,1,7,1,7,1,7,5,7,74,8,7,10,
7,12,7,77,9,7,1,8,1,8,1,8,5,8,82,8,8,10,8,12,8,85,9,8,1,9,1,9,1,9,1,9,1,
9,1,9,3,9,93,8,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,1,1,0,15,18,93,0,
23,1,0,0,0,2,29,1,0,0,0,4,31,1,0,0,0,6,41,1,0,0,0,8,49,1,0,0,0,10,53,1,0,
0,0,12,61,1,0,0,0,14,70,1,0,0,0,16,78,1,0,0,0,18,92,1,0,0,0,20,22,3,2,1,
0,21,20,1,0,0,0,22,25,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,1,1,0,0,0,25,
23,1,0,0,0,26,30,3,4,2,0,27,30,3,6,3,0,28,30,3,10,5,0,29,26,1,0,0,0,29,27,
1,0,0,0,29,28,1,0,0,0,30,3,1,0,0,0,31,32,5,1,0,0,32,33,5,19,0,0,33,34,5,
2,0,0,34,36,5,3,0,0,35,37,3,14,7,0,36,35,1,0,0,0,36,37,1,0,0,0,37,38,1,0,
0,0,38,39,5,4,0,0,39,40,5,5,0,0,40,5,1,0,0,0,41,42,5,6,0,0,42,43,5,7,0,0,
43,44,3,8,4,0,44,45,5,5,0,0,45,46,3,8,4,0,46,47,5,8,0,0,47,48,3,12,6,0,48,
7,1,0,0,0,49,50,5,19,0,0,50,51,5,2,0,0,51,52,3,16,8,0,52,9,1,0,0,0,53,54,
5,9,0,0,54,55,5,10,0,0,55,56,5,11,0,0,56,57,5,7,0,0,57,58,3,16,8,0,58,59,
5,8,0,0,59,60,5,5,0,0,60,11,1,0,0,0,61,65,5,12,0,0,62,64,3,2,1,0,63,62,1,
0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,68,1,0,0,0,67,65,1,0,
0,0,68,69,5,13,0,0,69,13,1,0,0,0,70,75,3,16,8,0,71,72,5,14,0,0,72,74,3,16,
8,0,73,71,1,0,0,0,74,77,1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,15,1,0,0,
0,77,75,1,0,0,0,78,83,3,18,9,0,79,80,7,0,0,0,80,82,3,18,9,0,81,79,1,0,0,
0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,17,1,0,0,0,85,83,1,0,0,0,
86,93,5,19,0,0,87,93,5,20,0,0,88,89,5,7,0,0,89,90,3,16,8,0,90,91,5,8,0,0,
91,93,1,0,0,0,92,86,1,0,0,0,92,87,1,0,0,0,92,88,1,0,0,0,93,19,1,0,0,0,7,
23,29,36,65,75,83,92];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'let'", "'='", "'['", "']'", "';'", "'for'", 
                            "'('", "')'", "'console'", "'.'", "'log'", "'{'", 
                            "'}'", "','", "'+'", "'-'", "'*'", "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "Identifier", "Number", "WS" ];
    static ruleNames = [ "program", "statement", "arrayDeclaration", "forStatement", 
                         "assignmentStatement", "consoleStatement", "block", 
                         "expressionList", "expression", "term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 578) !== 0)) {
	            this.state = 20;
	            this.statement();
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_statement);
	    try {
	        this.state = 29;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 26;
	            this.arrayDeclaration();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 27;
	            this.forStatement();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 28;
	            this.consoleStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrayDeclaration() {
	    let localctx = new ArrayDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_arrayDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(CalculatorParser.T__0);
	        this.state = 32;
	        this.match(CalculatorParser.Identifier);
	        this.state = 33;
	        this.match(CalculatorParser.T__1);
	        this.state = 34;
	        this.match(CalculatorParser.T__2);
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1572992) !== 0)) {
	            this.state = 35;
	            this.expressionList();
	        }

	        this.state = 38;
	        this.match(CalculatorParser.T__3);
	        this.state = 39;
	        this.match(CalculatorParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forStatement() {
	    let localctx = new ForStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_forStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(CalculatorParser.T__5);
	        this.state = 42;
	        this.match(CalculatorParser.T__6);
	        this.state = 43;
	        this.assignmentStatement();
	        this.state = 44;
	        this.match(CalculatorParser.T__4);
	        this.state = 45;
	        this.assignmentStatement();
	        this.state = 46;
	        this.match(CalculatorParser.T__7);
	        this.state = 47;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalculatorParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(CalculatorParser.Identifier);
	        this.state = 50;
	        this.match(CalculatorParser.T__1);
	        this.state = 51;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	consoleStatement() {
	    let localctx = new ConsoleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CalculatorParser.RULE_consoleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(CalculatorParser.T__8);
	        this.state = 54;
	        this.match(CalculatorParser.T__9);
	        this.state = 55;
	        this.match(CalculatorParser.T__10);
	        this.state = 56;
	        this.match(CalculatorParser.T__6);
	        this.state = 57;
	        this.expression();
	        this.state = 58;
	        this.match(CalculatorParser.T__7);
	        this.state = 59;
	        this.match(CalculatorParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CalculatorParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(CalculatorParser.T__11);
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 578) !== 0)) {
	            this.state = 62;
	            this.statement();
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 68;
	        this.match(CalculatorParser.T__12);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionList() {
	    let localctx = new ExpressionListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CalculatorParser.RULE_expressionList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.expression();
	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 71;
	            this.match(CalculatorParser.T__13);
	            this.state = 72;
	            this.expression();
	            this.state = 77;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CalculatorParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.term();
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 491520) !== 0)) {
	            this.state = 79;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 491520) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 80;
	            this.term();
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CalculatorParser.RULE_term);
	    try {
	        this.state = 92;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 86;
	            this.match(CalculatorParser.Identifier);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 87;
	            this.match(CalculatorParser.Number);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 88;
	            this.match(CalculatorParser.T__6);
	            this.state = 89;
	            this.expression();
	            this.state = 90;
	            this.match(CalculatorParser.T__7);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.T__0 = 1;
CalculatorParser.T__1 = 2;
CalculatorParser.T__2 = 3;
CalculatorParser.T__3 = 4;
CalculatorParser.T__4 = 5;
CalculatorParser.T__5 = 6;
CalculatorParser.T__6 = 7;
CalculatorParser.T__7 = 8;
CalculatorParser.T__8 = 9;
CalculatorParser.T__9 = 10;
CalculatorParser.T__10 = 11;
CalculatorParser.T__11 = 12;
CalculatorParser.T__12 = 13;
CalculatorParser.T__13 = 14;
CalculatorParser.T__14 = 15;
CalculatorParser.T__15 = 16;
CalculatorParser.T__16 = 17;
CalculatorParser.T__17 = 18;
CalculatorParser.Identifier = 19;
CalculatorParser.Number = 20;
CalculatorParser.WS = 21;

CalculatorParser.RULE_program = 0;
CalculatorParser.RULE_statement = 1;
CalculatorParser.RULE_arrayDeclaration = 2;
CalculatorParser.RULE_forStatement = 3;
CalculatorParser.RULE_assignmentStatement = 4;
CalculatorParser.RULE_consoleStatement = 5;
CalculatorParser.RULE_block = 6;
CalculatorParser.RULE_expressionList = 7;
CalculatorParser.RULE_expression = 8;
CalculatorParser.RULE_term = 9;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_program;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitProgram(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_statement;
    }

	arrayDeclaration() {
	    return this.getTypedRuleContext(ArrayDeclarationContext,0);
	};

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	consoleStatement() {
	    return this.getTypedRuleContext(ConsoleStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitStatement(this);
		}
	}


}



class ArrayDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_arrayDeclaration;
    }

	Identifier() {
	    return this.getToken(CalculatorParser.Identifier, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterArrayDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitArrayDeclaration(this);
		}
	}


}



class ForStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_forStatement;
    }

	assignmentStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignmentStatementContext);
	    } else {
	        return this.getTypedRuleContext(AssignmentStatementContext,i);
	    }
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitForStatement(this);
		}
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_assignmentStatement;
    }

	Identifier() {
	    return this.getToken(CalculatorParser.Identifier, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}


}



class ConsoleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_consoleStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterConsoleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitConsoleStatement(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_block;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitBlock(this);
		}
	}


}



class ExpressionListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_expressionList;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterExpressionList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitExpressionList(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_expression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitExpression(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_term;
    }

	Identifier() {
	    return this.getToken(CalculatorParser.Identifier, 0);
	};

	Number() {
	    return this.getToken(CalculatorParser.Number, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitTerm(this);
		}
	}


}




CalculatorParser.ProgramContext = ProgramContext; 
CalculatorParser.StatementContext = StatementContext; 
CalculatorParser.ArrayDeclarationContext = ArrayDeclarationContext; 
CalculatorParser.ForStatementContext = ForStatementContext; 
CalculatorParser.AssignmentStatementContext = AssignmentStatementContext; 
CalculatorParser.ConsoleStatementContext = ConsoleStatementContext; 
CalculatorParser.BlockContext = BlockContext; 
CalculatorParser.ExpressionListContext = ExpressionListContext; 
CalculatorParser.ExpressionContext = ExpressionContext; 
CalculatorParser.TermContext = TermContext; 
