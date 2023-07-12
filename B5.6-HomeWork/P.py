print("Крестики - нолики" + '\n' \
      "Поочередно занимайте свободные ячейки поля," + '\n' \
      "пока не получите победную комбинацию:" + '\n' \
      "(11-12-13),(21-22-23),(31_32_33)" + '\n' \
      "(11-21-31),(12-22-32),(13_23_33)" + '\n' \
      "(11-22-33),(31-22-13)"
      )
# получение матрицы в деталях
matrix_details = [["", 1, 2, 3],
                  [1, 11, 12, 13],
                  [2, 21, 22, 23],
                  [3, 31, 32, 33],
                  ]


def get_matrix_details():
    for i in matrix_details:
        print(*[f"{x:>2}" for x in i])


matrix = [["", 1, 2, 3],
          [1, "_", "_", "_"],
          [2, "_", "_", "_"],
          [3, "_", "_", "_"],
          ]


# получение поля
def get_matrix():
    for i in matrix:
        print(*[f"{x:>2}" for x in i])


# передача значений в поле
def index_matrix():
    print("Ячейки поля:")
    get_matrix_details()
    while True:
        index = int(input("Выберите одну из свободных ячеек поля:"))
        if side == 1:
            if index == 11 and matrix[1][1] == "_":
                matrix[1][1] = "X"
                break
            elif index == 12 and matrix[1][2] == "_":
                matrix[1][2] = "X"
                break
            elif index == 13 and matrix[1][3] == "_":
                matrix[1][3] = "X"
                break
            elif index == 21 and matrix[2][1] == "_":
                matrix[2][1] = "X"
                break
            elif index == 22 and matrix[2][2] == "_":
                matrix[2][2] = "X"
                break
            elif index == 23 and matrix[2][3] == "_":
                matrix[2][3] = "X"
                break
            elif index == 31 and matrix[3][1] == "_":
                matrix[3][1] = "X"
                break
            elif index == 32 and matrix[3][2] == "_":
                matrix[3][2] = "X"
                break
            elif index == 33 and matrix[3][3] == "_":
                matrix[3][3] = "X"
                break
            else:
                print("Неверное значение поля")
        elif side == 0:
            if index == 11 and matrix[1][1] == "_":
                matrix[1][1] = "O"
                break
            elif index == 12 and matrix[1][2] == "_":
                matrix[1][2] = "O"
                break
            elif index == 13 and matrix[1][3] == "_":
                matrix[1][3] = "O"
                break
            elif index == 21 and matrix[2][1] == "_":
                matrix[2][1] = "O"
                break
            elif index == 22 and matrix[2][2] == "_":
                matrix[2][2] = "O"
                break
            elif index == 23 and matrix[2][3] == "_":
                matrix[2][3] = "O"
                break
            elif index == 31 and matrix[3][1] == "_":
                matrix[3][1] = "O"
                break
            elif index == 32 and matrix[3][2] == "_":
                matrix[3][2] = "O"
                break
            elif index == 33 and matrix[3][3] == "_":
                matrix[3][3] = "O"
                break
            else:
                print("Неверное значение поля")
    get_matrix()


# результат
def get_result():
    win = ""
    for i in range(1, 4):
        if (matrix[i][1] == "X" and matrix[i][2] == "X" and matrix[i][3] == "X") or \
                (matrix[1][i] == "X" and matrix[2][i] == "X" and matrix[3][i] == "X") or \
                (matrix[1][1] == "X" and matrix[2][2] == "X" and matrix[3][3] == "X") or \
                (matrix[3][1] == "X" and matrix[2][2] == "X" and matrix[1][3] == "X"):
            win = "Победитель - игрок за X"
        elif (matrix[i][1] == "O" and matrix[i][2] == "O" and matrix[i][3] == "O") or \
                (matrix[1][i] == "O" and matrix[2][i] == "O" and matrix[3][i] == "O") or \
                (matrix[1][1] == "O" and matrix[2][2] == "O" and matrix[3][3] == "O") or \
                (matrix[3][1] == "O" and matrix[2][2] == "O" and matrix[1][3] == "O"):
            win = "Победитель - игрок за O"

    return win

# основной цикл
k = 0
while True:
    k += 1
    side = 1
    print("Ход игрока за Х")
    index_matrix()
    win = get_result()
    if win != "":
        print(get_result())
        break
    elif k == 5:
        print("Ничья")
        break
    side = 0
    print("Ход игрока за O")
    index_matrix()
    win = get_result()
    if win != "":
        print(get_result())
        break
    elif k == 5:
        print("Ничья")
        break



# создание ИИ наработки
# def AI():
#     global i, k
#     if side == 1:
#         for i in range(1, 4):
#             k = 0
#             if matrix[1][i] == "O" or matrix[2][i] == "O" or matrix[3][i] == "O":
#                 k += 1
#         if k == 2:
#             if matrix[1][i] == "_":
#                 matrix[1][i] = "O"
#                 get_matrix()
#         if matrix[2][2] == "_":
#             matrix[2][2] = "O"
#         get_matrix()
#         for line in range(1, 4):
#             o = 0
#             for j in range(1, 4):
#                 if matrix[line][j] == "X":
#                     o += 1
#             if o == 2:
#                 for j in range(1, 4):
#                     if matrix[line][j] == "_":
#                         matrix[line][j] = "O"
#                         get_matrix()
#         for j in range(1, 4):
#             o = 0
#             for line in range(1, 4):
#                 if matrix[line][j] == "X":
#                     o += 1
#             if o == 2:
#                 for line in range(1, 4):
#                     if matrix[line][j] == "_":
#                         matrix[line][j] = "O"
#                         get_matrix()

# def gaming():
#     game = True
#     while game:
#         if side == 1:
#             index_matrix()
#             print("Ход AI")
#             AI()
#         elif side == 0:
#             print("Ход AI")
#             AI()
#             index_matrix()
#         win = get_result()
#         if win != "":
#             print(get_result())
#             game = False
#
#
# gaming()