//
//  main.c
//  Brain Fuck
//
//  Created by Ozan Mirza on 10/18/21.
//

#include <stdio.h>
#include <string.h>

#define OP_END          0
#define OP_INC_DP       1
#define OP_DEC_DP       2
#define OP_INC_VAL      3
#define OP_DEC_VAL      4
#define OP_OUT          5
#define OP_IN           6
#define OP_JMP_FWD      7
#define OP_JMP_BCK      8

#define COMPILE(R)      strcasecmp(R, "--compile") || strcasecmp(R, "-c")
#define RUN(R)          strcasecmp(R, "--run")     || strcasecmp(R, "-r")

#define SUCCESS         0
#define FAILURE         1

#define PROGRAM_SIZE    4096
#define STACK_SIZE      512
#define DATA_SIZE       65535

#define STACK_PUSH(A)   (STACK[SP++] = A)
#define STACK_POP()     (STACK[--SP])
#define STACK_EMPTY()   (SP == 0)
#define STACK_FULL()    (SP == STACK_SIZE)

struct instruction_t {
    unsigned short operator;
    unsigned short operand;
};

static struct instruction_t PROGRAM[PROGRAM_SIZE];
static unsigned short STACK[STACK_SIZE];
static unsigned int SP = 0;

int interpret(FILE* fp) {
    unsigned short pc = 0, jmp_pc;
    int c;
    while ((c = getc(fp)) != EOF && pc < PROGRAM_SIZE) {
        switch (c) {
            case '>': PROGRAM[pc].operator = OP_INC_DP; break;
            case '<': PROGRAM[pc].operator = OP_DEC_DP; break;
            case '+': PROGRAM[pc].operator = OP_INC_VAL; break;
            case '-': PROGRAM[pc].operator = OP_DEC_VAL; break;
            case '.': PROGRAM[pc].operator = OP_OUT; break;
            case ',': PROGRAM[pc].operator = OP_IN; break;
            case '[':
                PROGRAM[pc].operator = OP_JMP_FWD;
                if (STACK_FULL()) {
                    return FAILURE;
                }
                STACK_PUSH(pc);
                break;
            case ']':
                if (STACK_EMPTY()) {
                    return FAILURE;
                }
                jmp_pc = STACK_POP();
                PROGRAM[pc].operator =  OP_JMP_BCK;
                PROGRAM[pc].operand = jmp_pc;
                PROGRAM[jmp_pc].operand = pc;
                break;
            default: pc--; break;
        }
        pc++;
    }
    if (!STACK_EMPTY() || pc == PROGRAM_SIZE) {
        return FAILURE;
    }
    PROGRAM[pc].operator = OP_END;
    return SUCCESS;
}

int compile(FILE* fp) {
    if (interpret(fp) == SUCCESS) {
        // Here lies all of the compilers secrets...
        // Would have gon back to crack the code...
    }
    return FAILURE;
}

int execute(FILE* fp) {
    if (interpret(fp) == SUCCESS) {
        unsigned short data[DATA_SIZE], pc = 0;
        unsigned int ptr = DATA_SIZE;
        while (--ptr) { data[ptr] = 0; }
        while (PROGRAM[pc].operator != OP_END && ptr < DATA_SIZE) {
            switch (PROGRAM[pc].operator) {
                case OP_INC_DP: ptr++; break;
                case OP_DEC_DP: ptr--; break;
                case OP_INC_VAL: data[ptr]++; break;
                case OP_DEC_VAL: data[ptr]--; break;
                case OP_OUT: putchar(data[ptr]); break;
                case OP_IN: data[ptr] = (unsigned int)getchar(); break;
                case OP_JMP_FWD: if(!data[ptr]) { pc = PROGRAM[pc].operand; } break;
                case OP_JMP_BCK: if(data[ptr]) { pc = PROGRAM[pc].operand; } break;
                default: return FAILURE;
            }
            pc++;
        }
        return ptr != DATA_SIZE ? SUCCESS : FAILURE;
    }
    return FAILURE;
}

int main(int argc, const char * argv[]) {
    int status;
    FILE *fp;
    
    if (argc != 3 || !strcmp(strrchr(argv[2], '\0') - 2, "bf") || (fp = fopen(argv[2], "r")) == NULL) {
        fprintf(stderr, "Usage: %s filename\n", argv[1]);
        status = FAILURE;
    } else if (COMPILE(argv[1])) {
        status = compile(fp);
        fclose(fp);
    } else if (RUN(argv[1])) {
        status = execute(fp);
        fclose(fp);
    } else {
        fprintf(stderr, "Incorrect First-Position Argument: --compile (-c) or --run (-r)");
        status = FAILURE;
    }
    
    return status;
}
